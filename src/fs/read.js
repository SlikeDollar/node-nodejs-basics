import { stdout } from "process";
import { checkIfPathExists } from "../helpers/checkIfPathExists.js";
import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async (path) => {
  if (!(await checkIfPathExists(path))) {
    throw new Error("FS operation failed");
  }

  const readStream = fs.createReadStream(path);

  readStream.on('data', chunk => {
    stdout.write(chunk);
  })
};

const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
await read(filePath);
