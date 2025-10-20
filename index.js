import jsEslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import unusedImports from 'eslint-plugin-unused-imports';
import importPlugin from 'eslint-plugin-import';

import { 
  COMMON_RULES,
  IMPORT_RULES,
  REACT_RULES,
  ACCESSABILITY_JSX_RULES,
  TYPESCRIPT_RULES,
  STYLISTIC_RULES
} from './configs';

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
