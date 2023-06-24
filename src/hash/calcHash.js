import { createHash } from "crypto";
import fs from "fs";
import { stdout } from "process";
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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

const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
await calculateHash(filePath);
