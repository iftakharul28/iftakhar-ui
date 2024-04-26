import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import packageJson from './package.json'; // Importing package.json directly

export default {
  input: 'src/main.ts',
  output: [
    { file: packageJson.main, format: 'cjs', sourcemap: false },
    { file: packageJson.module, format: 'esm', sourcemap: false },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    terser(),
    typescript({ tsconfig: './tsconfig.json' }),
    postcss({
      extract: true,
      minimize: true,
    }),
  ],
  external: ['react', 'react-dom'],
};
