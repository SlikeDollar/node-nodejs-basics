import { checkIfPathExists } from '../helpers/checkIfPathExists.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const remove = async (path) => {
  if (!(await checkIfPathExists(path))) {
    throw new Error('FS operation failed');
  }

  fs.unlink(path)
    .catch(err => console.error('FS operation failed'));
};

const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');
await remove(filePath);
