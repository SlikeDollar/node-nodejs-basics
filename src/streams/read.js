import fs from 'fs';
import { stdout } from 'process';

const read = async (path) => {
  fs.createReadStream(path).pipe(stdout);
};

const path = new URL('./files/fileToRead.txt', import.meta.url).pathname;
await read(path);
