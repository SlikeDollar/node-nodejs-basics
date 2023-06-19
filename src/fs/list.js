import { checkIfPathExists } from '../helpers/checkIfPathExists.js';
import fs from 'fs/promises';

const list = async (path) => {
  if (!(await checkIfPathExists(path))) {
    throw new Error('FS operation failed');
  }

  console.log(await fs.readdir(path))
};

const path = new URL('./files', import.meta.url).pathname;
await list(path);
