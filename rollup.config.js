import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import wasm from '@rollup/plugin-wasm';
import copy from 'rollup-plugin-copy';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: `./dist`,
      format: 'cjs',
    },
    {
      dir: `./dist/types`,
      format: 'es',
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
    json(),
    wasm(),
    copy(),
  ],
}
