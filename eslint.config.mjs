import eslintConfigNext from 'eslint-config-next';

const config = [
  {
    ignores: ['.next/**', 'node_modules/**'],
  },
  ...eslintConfigNext,
];

export default config;
