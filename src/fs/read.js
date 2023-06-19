import { stdout } from "process";
import { checkIfPathExists } from "../helpers/checkIfPathExists.js";
import fs from "fs";

const read = async (path) => {
  if (!(await checkIfPathExists(path))) {
    throw new Error("FS operation failed");
  }

  const readStream = fs.createReadStream(path);

  readStream.on('data', chunk => {
    stdout.write(chunk);
  })
};

const path = new URL('./files/fileToRead.txt', import.meta.url).pathname;
await read(path);
