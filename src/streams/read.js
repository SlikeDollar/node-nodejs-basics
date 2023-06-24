import fs from 'fs';
import { stdout } from 'process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async (path) => {
  fs.createReadStream(path).pipe(stdout);
};

const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
await read(filePath);
