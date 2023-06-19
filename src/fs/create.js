import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { checkIfPathExists } from '../helpers/checkIfPathExists.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'fresh.txt');

const create = async (text, path) => {
  if (await checkIfPathExists(path)) {
    throw new Error('FS operation failed');
  }

  const writer = fs.createWriteStream(path);
  writer.write(text);
};

await create('I am fresh and young', filePath);
