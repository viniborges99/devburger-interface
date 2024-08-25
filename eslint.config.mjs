import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        // Adicione variáveis globais aqui, se necessário
      },
    },
    plugins: {
      prettier: eslintPluginPrettier,
      react: eslintPluginPrettier,
      'react-hooks': eslintPluginPrettier,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended',
      eslintConfigPrettier, // eslint-config-prettier
    ],
    rules: {
      'prettier/prettier': 'error',
      'no-console': 'off',
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];

