import fs from 'fs';

export async function checkIfPathExists(path) {
  return await fs.promises.access(path).then(() => true).catch(() => false);
}

