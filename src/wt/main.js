import os from 'os';
import { URL } from 'url';
import { Worker } from 'worker_threads';

const performCalculations = async (path) => {
  const coresNumber = os.cpus().length;
  const defaultFibNum = 34;

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

const path = new URL('./worker.js', import.meta.url).pathname;
console.log(await performCalculations(path));
