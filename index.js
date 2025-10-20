import jsEslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import unusedImports from 'eslint-plugin-unused-imports';
import importPlugin from 'eslint-plugin-import';

export { COMMON_RULES } from './configs/common.js';
export { IMPORT_RULES } from './configs/import.js';
export { REACT_RULES } from './configs/react.js';
export { ACCESSABILITY_JSX_RULES } from './configs/jsx-a11y.js';
export { TYPESCRIPT_RULES } from './configs/typescript.js';
export { STYLISTIC_RULES } from './configs/stylistic.js';

export default [{
  extends: [
    jsEslint.configs.recommended, 
    tsEslint.configs.strict,
    tsEslint.configs.stylistic,
    react.configs.flat.recommended,
    react.configs.flat['jsx-runtime'],
  ],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    'react': react,
    'react-hooks': reactHooks,
    'unused-imports': unusedImports,
    'import': importPlugin,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    ...COMMON_RULES,
    ...IMPORT_RULES,
    ...REACT_RULES,
    ...ACCESSABILITY_JSX_RULES,
    ...TYPESCRIPT_RULES,
    ...STYLISTIC_RULES,
  },
}];
