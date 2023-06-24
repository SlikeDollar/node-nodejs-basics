import fs from 'fs';
import { stdin } from 'process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const write = async (path) => {
  const writeStream = fs.createWriteStream(path);
  stdin.on('data', (data) => {
    writeStream.write(data);
  });
};

const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
await write(filePath);
