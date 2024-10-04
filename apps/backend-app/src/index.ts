import express from 'express';

const app = express();

// this will give the error on for export and this is bcoz of tsc compiler

// Solution: Use bundler like esbuild tsup for compiling ts files to avoid this kind of errors while building

// COMMAND TO BUILD = npx esbuild ./src/index.ts --bundle --platform=node --outfile=./dist/index.js
import { CLOUDFLARE_WORKER_URL } from '@repo/common/config';

const PORT = 4000;
console.log(CLOUDFLARE_WORKER_URL);

app.get('/', (req, res) => {
  res.json({
    message: 'hello world',
  });
});

// DO NOT FORGET TO ADD extends in tsconfig.json file for extending it in turbo

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
