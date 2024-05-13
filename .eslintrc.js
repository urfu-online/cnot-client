module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  globals: {
    React: true,
    JSX: true,
  },

  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    // 'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'eslint:recommended',
    // 'standard',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        printWidth: 120,
      },
    ],
    'no-unused-vars': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-empty-function': ['warn', { allow: ['arrowFunctions'] }],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-use-before-define': 'off',
    'max-len': ['warn', { code: 120 }],
  },
}
