import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream';
import { createGzip } from 'zlib';

const compress = async (source, dest) => {
  const gzip = createGzip();
  const readStream = fs.createReadStream(source);
  const writeStream = fs.createWriteStream(dest);

  pipeline(readStream, gzip, writeStream, (err) => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
  })
};

const sourcePath = new URL('./files/fileToCompress.txt', import.meta.url).pathname;
const destinationPath = new URL('./files/archive.gz', import.meta.url).pathname;
await compress(sourcePath, destinationPath);
