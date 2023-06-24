import fs from "fs";
import path from "path";
import { pipeline } from "stream";
import { createGzip } from "zlib";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const compress = async (source, dest) => {
  const gzip = createGzip();
  const readStream = fs.createReadStream(source);
  const writeStream = fs.createWriteStream(dest);

  pipeline(readStream, gzip, writeStream, (err) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    }
  });
};

const sourcePath = path.join(__dirname, "files", "fileToCompress.txt");
const destinationPath = path.join(__dirname, "files", "archive.gz");
await compress(sourcePath, destinationPath);
