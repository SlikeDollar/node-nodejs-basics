import { checkIfPathExists } from '../helpers/checkIfPathExists.js';
import fs from 'fs/promises';

const remove = async (path) => {
  if (!(await checkIfPathExists(path))) {
    throw new Error('FS operation failed');
  }

  fs.unlink(path)
    .catch(err => console.error('FS operation failed'));
};

const path = new URL('./files/fileToRemove.txt', import.meta.url).pathname;
await remove(path);
