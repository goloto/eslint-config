import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import unusedImports from 'eslint-plugin-unused-imports';
import importPlugin from 'eslint-plugin-import';
import stylistic from '@stylistic/eslint-plugin';

import { COMMON_RULES } from './configs/common.js';
import { IMPORT_RULES } from './configs/import.js';
import { REACT_RULES } from './configs/react.js';
import { ACCESSABILITY_JSX_RULES } from './configs/jsx-a11y.js';
import { TYPESCRIPT_RULES } from './configs/typescript.js';
import { STYLISTIC_RULES } from './configs/stylistic.js';

export default [{
  plugins: {
    'react': react,
    'react-hooks': reactHooks,
    'unused-imports': unusedImports,
    'import': importPlugin,
    '@stylistic': stylistic
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
