import { checkIfPathExists } from "../helpers/checkIfPathExists.js";
import fs from "fs/promises";

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

const initalDirectory = new URL('./files', import.meta.url).pathname;
const finalDirectory = new URL('./files_copy', import.meta.url).pathname;

await copy(initalDirectory, finalDirectory);
