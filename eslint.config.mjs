import { defineConfig } from 'eslint-define-config';
import babelParser from '@babel/eslint-parser';
import reactPlugin from 'eslint-plugin-react';

export default defineConfig({
  languageOptions: {
    parser: babelParser, // JSX用のBabelパーサーを指定
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true, // JSXを解析する
      },
    },
  },
  plugins: {
    react: reactPlugin, // Reactプラグインをインポートしてオブジェクト形式で指定
  },
  rules: {
    'no-console': 'warn', // コンソールの警告
  },
});
//lintが今のままだと
//URLのとこを記入