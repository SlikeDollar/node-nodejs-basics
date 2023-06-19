import { fork, spawn } from 'child_process';
// const spawnChildProcess = async (path, args) => {
//   const child = spawn('node', [path, ...args]);
//
//   process.stdin.pipe(child.stdin);
//   child.stdout.pipe(process.stdout);
// }

const spawnChildProcess = async (path, args) => {
  const child = fork(path, args, {
    stdio: ['inherit', 'inherit', 'ignore', 'ipc'],
  });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
}

const path = new URL('./files/script.js', import.meta.url).pathname;
const args = ['im', 'bout', 'to', 'bomb', 'this', 'mf', 'plane'];
spawnChildProcess(path, args);
