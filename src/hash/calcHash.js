import { createHash } from "crypto";
import fs from "fs";
import { stdout } from "process";

const calculateHash = async (path) => {
  const readStream = fs.createReadStream(path);
  const hash = createHash('sha256');

  readStream.on('data', (data) => {
    hash.update(data);
  })

  readStream.on('end', () => {
    const hex = hash.digest('hex');
    stdout.write(hex);
  })
};

const path = new URL('./files/fileToCalculateHashFor.txt', import.meta.url).pathname;
await calculateHash(path);
