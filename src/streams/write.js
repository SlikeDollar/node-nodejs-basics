import fs from 'fs';
import { stdin } from 'process';

const write = async (path) => {
  const writeStream = fs.createWriteStream(path);
  stdin.on('data', (data) => {
    writeStream.write(data);
  });
};

const path = new URL('./files/fileToWrite.txt', import.meta.url).pathname;
await write(path);
