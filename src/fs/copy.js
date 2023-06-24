import { checkIfPathExists } from "../helpers/checkIfPathExists.js";
import fs from "fs/promises";
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const copy = async (initialDirectory, finalDirectory) => {
  if (
    !(await checkIfPathExists(initialDirectory)) ||
    (await checkIfPathExists(finalDirectory))
  ) {
    throw new Error("FS operation failed");
  }

  fs.cp(initialDirectory, finalDirectory, {recursive: true})
    .catch(err => console.error(err, 'fs operation failed'))
};

const initalDirectory = path.join(__dirname, 'files');
const finalDirectory = path.join(__dirname, 'files_copy');

await copy(initalDirectory, finalDirectory);
