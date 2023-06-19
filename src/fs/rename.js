import fs from "fs/promises";
import { checkIfPathExists } from "../helpers/checkIfPathExists.js";

const rename = async (initialFile, resultFile) => {
  if (!(await checkIfPathExists(initialFile)) || await checkIfPathExists(resultFile)) {
    throw new Error('FS operation failed');
  }

  fs.rename(initialFile, resultFile)
    .catch(err => console.error('FS operation failed'))
};

const initialFile = new URL('./files/wrongFilename.txt', import.meta.url).pathname;
const resultFile = new URL('./files/properFilename.md', import.meta.url).pathname;

await rename(initialFile, resultFile);
