import { fork } from 'child_process';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';


// const spawnChildProcess = async (path, args) => {
//   const child = spawn('node', [path, ...args]);
//
//   process.stdin.pipe(child.stdin);
//   child.stdout.pipe(process.stdout);
// }

const spawnChildProcess = async (scriptPath, args) => {
  const child = fork(scriptPath, args, {
    stdio: ['pipe', 'pipe', 'ipc'],
  });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const scriptPath = path.join(__dirname, 'files', 'script.js');

const args = ['im', 'bout', 'to', 'bomb', 'this', 'mf', 'plane'];
spawnChildProcess(scriptPath, args);
