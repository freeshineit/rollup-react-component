import { type Plugin } from 'rollup';
import typescript from '@rollup/plugin-typescript';
// Convert CommonJS modules to ES6
import commonjs from '@rollup/plugin-commonjs';
// babel
import { babel } from '@rollup/plugin-babel';
// so Rollup can find `rxjs`. lib
import resolve from '@rollup/plugin-node-resolve';
import eslint from '@rollup/plugin-eslint';

// node >= 10.16.0
import filesize from 'rollup-plugin-filesize';
import replace from '@rollup/plugin-replace';

import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';

import pkg from '../package.json';

import { isDev } from './env';

export default [
  eslint({
    throwOnError: true, // lint 结果有错误将会抛出异常
    // throwOnWarning: true,
    include: ['src/**/*.{ts,tsx}', 'src/**/*.{js,jsx}'],
    exclude: ['node_modules/**', '**/__tests__/**'],
  }),
  typescript({
    exclude: ['**/__tests__/**/*.{ts,js}'],
    include: ['**/src/**/*.{ts,js,jsx,tsx}'],
    sourceMap: isDev,
    inlineSources: isDev,
    declaration: !isDev,
    declarationDir: !isDev ? 'dist/types' : undefined,
  }),
  resolve(),
  commonjs({ extensions: ['.js', 'jsx', '.ts', 'tsx'] }),
  babel({ babelHelpers: 'bundled' }),
  replace({
    preventAssignment: true,
    __VERSION__: pkg.version,
    'process.env.NODE_ENV': isDev ? '"development"' : '"production"',
  }),
  postcss({
    plugins: [autoprefixer(), cssnano({ preset: 'default' })],
    sourceMap: isDev,
    extract: false,
  }),
  !isDev && filesize(),
] as Plugin[];
