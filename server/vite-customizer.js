import { Readable } from 'node:stream';
import { readFile } from 'node:fs/promises';
import { localBindings } from './local.js';
import { handleApi } from './worker.js';

export function customizerDevelopment() {
  async function configure(server) {
    const env = await localBindings();
    server.httpServer?.on('close', () => env.close());
    server.middlewares.use('/api/customizer', async (req, res) => {
      try {
        // Local secrets can change while Vite is running; do not retain the old login key.
        const vars = await readFile('.dev.vars', 'utf8').catch((error) => {
          if (error.code === 'ENOENT') return '';
          throw error;
        });
        env.CUSTOMIZER_ADMIN_TOKEN = process.env.CUSTOMIZER_ADMIN_TOKEN
          || vars.match(/^CUSTOMIZER_ADMIN_TOKEN=["']?([^\r\n"']+)/m)?.[1] || '';
        const url = new URL(`/api/customizer${req.url}`, `http://${req.headers.host}`);
        const request = new Request(url, {
          method: req.method, headers: req.headers,
          ...(!['GET', 'HEAD'].includes(req.method) ? { body: Readable.toWeb(req), duplex: 'half' } : {}),
        });
        const result = await handleApi(request, env);
        res.writeHead(result.status, Object.fromEntries(result.headers));
        if (result.body) Readable.fromWeb(result.body).pipe(res); else res.end();
      } catch { res.writeHead(500, { 'Content-Type': 'application/json' }); res.end(JSON.stringify({ error: 'The local material library could not complete the request.' })); }
    });
  }
  return { name: 'hurfa-customizer-development', configureServer: configure, configurePreviewServer: configure };
}
