const resolve = require('@rollup/plugin-node-resolve');
const terser = require('@rollup/plugin-terser');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('rollup-plugin-typescript2');
const postcss = require('rollup-plugin-postcss');
const packageJson = require('./package.json');
export default {
  input: 'src/main.ts',
  output: [
    { file: packageJson.main, format: 'cjs', sourcemap: false },
    { file: packageJson.module, format: 'esm', sourcemap: false },
  ],
  plugins: [
    terser(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    postcss({
      // Add the postcss plugin configuration
      extract: true, // Extract the CSS to a separate file
      minimize: true, // Minimize the CSS output
    }),
  ],
  external: ['react', 'react-dom'],
};
