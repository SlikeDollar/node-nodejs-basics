import { checkIfPathExists } from '../helpers/checkIfPathExists.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const list = async (path) => {
  if (!(await checkIfPathExists(path))) {
    throw new Error('FS operation failed');
  }

  console.log(await fs.readdir(path))
};

const dirPath = path.join(__dirname, 'files');
await list(dirPath);
