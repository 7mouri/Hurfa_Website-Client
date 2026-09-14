// Development adapter for the same D1/R2 API used in production. Never bundled into the Worker.
import { DatabaseSync } from 'node:sqlite';
import { mkdir, readFile, writeFile, unlink, readdir } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { randomBytes, createHash } from 'node:crypto';

export async function localBindings(root = resolve('.local/customizer')) {
  await mkdir(join(root, 'assets'), { recursive: true });
  const sqlite = new DatabaseSync(join(root, 'catalog.sqlite'));
  sqlite.exec('PRAGMA foreign_keys = ON; PRAGMA journal_mode = WAL; PRAGMA busy_timeout = 5000; CREATE TABLE IF NOT EXISTS _local_migrations (name TEXT PRIMARY KEY)');
  for (const name of (await readdir(resolve('drizzle'))).filter((n) => n.endsWith('.sql')).sort()) {
    if (sqlite.prepare('SELECT name FROM _local_migrations WHERE name = ?').get(name)) continue;
    sqlite.exec('BEGIN');
    try { sqlite.exec(await readFile(resolve('drizzle', name), 'utf8')); sqlite.prepare('INSERT INTO _local_migrations VALUES (?)').run(name); sqlite.exec('COMMIT'); }
    catch (error) { sqlite.exec('ROLLBACK'); throw error; }
  }
  let vars = '';
  try { vars = await readFile('.dev.vars', 'utf8'); } catch (error) { if (error.code !== 'ENOENT') throw error; }
  const configured = Object.fromEntries(vars.split(/\r?\n/).filter((line) => /^[A-Z_]+=/.test(line)).map((line) => { const index = line.indexOf('='); return [line.slice(0, index), line.slice(index + 1).replace(/^["']|["']$/g, '')]; }));
  let token = process.env.CUSTOMIZER_ADMIN_TOKEN;
  if (!token) {
    token = vars.match(/^CUSTOMIZER_ADMIN_TOKEN=["']?([^\r\n"']+)/m)?.[1];
    if (!token) {
      token = randomBytes(32).toString('hex');
      await writeFile('.dev.vars', `${vars}\nCUSTOMIZER_ADMIN_TOKEN=${token}\n`, { mode: 0o600 });
      console.log('Created a private studio access key in .dev.vars. Use it at /admin/bedroom-materials.');
    }
  }
  const DB = {
    prepare(sql) {
      const statement = sqlite.prepare(sql); let args = [];
      return {
        bind(...values) { args = values; return this; },
        async first() { return statement.get(...args) || null; },
        async all() { return { results: statement.all(...args) }; },
        async run() { const result = statement.run(...args); return { meta: { changes: Number(result.changes) } }; },
      };
    },
  };
  function path(key) {
    if (!/^(image|model)\/[a-f\d-]{36}$/.test(key)) throw new Error('Invalid object key');
    return join(root, 'assets', key.replace('/', '_'));
  }
  const MATERIAL_ASSETS = {
    async put(key, bytes) { await writeFile(path(key), bytes, { flag: 'wx' }); },
    async get(key) {
      try { const bytes = await readFile(path(key)); return { body: bytes, httpEtag: `"${createHash('sha256').update(bytes).digest('hex')}"` }; }
      catch (error) { if (error.code === 'ENOENT') return null; throw error; }
    },
    async delete(key) { await unlink(path(key)); },
  };
  return { DB, MATERIAL_ASSETS, CUSTOMIZER_ADMIN_TOKEN: token,
    IMAGEKIT_PRIVATE_KEY: process.env.IMAGEKIT_PRIVATE_KEY || configured.IMAGEKIT_PRIVATE_KEY,
    IMAGEKIT_URL_ENDPOINT: process.env.IMAGEKIT_URL_ENDPOINT || configured.IMAGEKIT_URL_ENDPOINT || 'https://ik.imagekit.io/6dghafkgmq',
    close: () => sqlite.close() };
}
