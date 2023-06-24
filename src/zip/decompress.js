import fs from 'fs';
import { pipeline } from 'stream';
import { createGunzip } from 'zlib';
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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

const sourcePath = path.join(__dirname, "files", "archive.gz");
const destinationPath = path.join(__dirname, "files", "fileCompress.txt");
await decompress(sourcePath, destinationPath);
