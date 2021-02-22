// rollup.config.js
import path from 'path';
import vue from 'rollup-plugin-vue';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import nodeResolve from "@rollup/plugin-node-resolve";

const projectRoot = path.resolve(__dirname, '..');

// Customize configs for individual targets
const buildFormats = [];
const esConfig = {
  input: 'src/entry.js',
  external: [
    'vue',
  ],
  output: {
    file: 'dist/testlib.esm.js',
    format: 'esm',
    exports: 'named',
  },
  plugins: [
    alias({
      resolve: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      entries: {
        '@': path.resolve(projectRoot, 'src'),
      },
    }),
    vue({
      css: true,
      template: {
        isProduction: true,
      },
    }),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
    }),
    nodeResolve(),
    commonjs(),
  ],
};
buildFormats.push(esConfig);

// Export config
export default buildFormats;
