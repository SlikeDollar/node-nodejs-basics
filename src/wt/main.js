import os from 'os';
import path from "path";
import { URL } from 'url';
import { Worker } from 'worker_threads';
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const performCalculations = async (path) => {
  const coresNumber = os.cpus().length;
  const defaultFibNum = 10;

  const promiseArr = Array.from({length: coresNumber}, ((_, index) => {
    return new Promise((res, rej) => {
      const worker = new Worker(path, { workerData: defaultFibNum + index });
      worker.on('message', (num) => res(num));
      worker.on('error', () => rej(null));
    })
  }));

  return (await Promise.allSettled(promiseArr)).map(({status, value}) => {
    return {
      status: status === 'fulfilled' ? 'resolved' : 'rejected',
      value
    }
  });
};

const filePath = path.join(__dirname, "worker.js");
console.log(await performCalculations(filePath));
