import fs from 'fs';
import { pipeline } from 'stream';
import { createGunzip } from 'zlib';

const decompress = async (source, dest) => {
  const unzip = createGunzip();
  const readStream = fs.createReadStream(source);
  const writeStream = fs.createWriteStream(dest);

  pipeline(readStream, unzip, writeStream, (err) => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
  });
};

const sourcePath = new URL('./files/archive.gz', import.meta.url).pathname;
const destPath = new URL('./files/fileCompress.txt', import.meta.url).pathname;
await decompress(sourcePath, destPath);
