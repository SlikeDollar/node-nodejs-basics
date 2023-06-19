import { stdout, stdin } from 'process';
import { Transform } from 'stream';

const reverseText = new Transform({
  transform(chunk, encoding, callback) {
    const reversedText = chunk
      .toString()
      .split('')
      .reverse()
      .join('');

    callback(null, reversedText);
  }
})

const transform = async (path) => {
  stdin.pipe(reverseText).pipe(stdout);
};

await transform();
