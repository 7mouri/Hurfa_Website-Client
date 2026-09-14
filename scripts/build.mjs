import { rm, lstat } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { build } from 'vite';

const project = resolve('.');
const output = resolve(project, 'dist');
if (dirname(output) !== project || (await lstat(output).catch(() => null))?.isSymbolicLink()) throw new Error('Unsafe build output path.');
// Remove only this project's generated output; old static builds must not enter Worker archives.
await rm(output, { recursive: true, force: true });
await build();
await build({ configFile: resolve('vite.worker.config.js') });
