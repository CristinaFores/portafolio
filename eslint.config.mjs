import eslintConfigNext from 'eslint-config-next';
import js from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import nextConfig from 'eslint-config-next/core-web-vitals'
import prettierConfig from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import tseslint from 'typescript-eslint'

export default defineConfig([
  globalIgnores([
    '.next/**',
    'node_modules/**',
    'dist/**',
    'coverage/**',
    'next-env.d.ts',
    'jest.config.js',
    'jest.polyfills.js',
  ]),

  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...nextConfig,
  ...eslintConfigNext,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      import: importPlugin,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    settings: {
      react: { version: 'detect' },
      next: { rootDir: '.' },
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'prefer-const': 'error',
      'no-var': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/prefer-readonly': 'off',
      '@typescript-eslint/prefer-readonly-parameter-types': 'off',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],
    },
  },

  {
    files: [
      '**/__tests__/**/*.{ts,tsx}',
      '**/__mocks__/**/*.{ts,tsx}',
      '**/*.test.{ts,tsx}',
      '**/*.spec.{ts,tsx}',
      'jest.setup.ts',
    ],
  },

  prettierConfig,
])
