import path from 'path'
import { release, version } from 'os'
import { createServer as createServerHttp } from 'http'
import './files/c.js'
import { fileURLToPath } from 'url';


const random = Math.random();
export let unknownObject;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __filename = fileURLToPath(import.meta.url);

if (random > 0.5) {
    unknownObject = import('./files/a.json', {assert:{type:'json'}});
} else {
    unknownObject = import('./files/a.json', {assert:{type:'json'}});
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 8888;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});