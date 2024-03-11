module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'no-unused-vars': ['error', { 'varsIgnorePattern': '_', 'argsIgnorePattern': '_', 'ignoreRestSiblings': false, 'args': 'after-used', 'vars': 'all', 'caughtErrors': 'none', 'caughtErrorsIgnorePattern': '^_' }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['renderer/**/*.ts', 'renderer/**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
      ],
      rules: {
        'no-unused-vars': ['error', { 'varsIgnorePattern': '_', 'argsIgnorePattern': '_', 'ignoreRestSiblings': false, 'args': 'after-used', 'vars': 'all', 'caughtErrors': 'none', 'caughtErrorsIgnorePattern': '^_' }],
        'react/react-in-jsx-scope': 'off',
        'no-constant-condition': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
}
