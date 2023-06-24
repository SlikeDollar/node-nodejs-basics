import fs from "fs/promises";
import { checkIfPathExists } from "../helpers/checkIfPathExists.js";
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rename = async (initialFile, resultFile) => {
  if (!(await checkIfPathExists(initialFile)) || await checkIfPathExists(resultFile)) {
    throw new Error('FS operation failed');
  }

  fs.rename(initialFile, resultFile)
    .catch(() => console.error('FS operation failed'));
};

const initialFile = path.join(__dirname, 'files', 'wrongFilename.txt');
const resultFile = path.join(__dirname, 'files', 'properFilename.txt');

await rename(initialFile, resultFile);
