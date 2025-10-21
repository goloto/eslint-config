import { WARN, ERROR, OFF } from './constants.js';

export const IMPORT_RULES = {
  'no-restricted-imports': [ERROR, { 
    // запрет на импорты с расширениями файлов
    patterns: ['*.ts', '*.tsx']
  }],
  // экспорт по дефолту, отдаём преимущество именованному экспорту
  'import/prefer-default-export': OFF,
  // импорт зависимостей
  'import/no-extraneous-dependencies': [WARN, { devDependencies: true }],
  // порядок импортов
  'import/order': [
    ERROR,
    {
      'alphabetize': { order: 'asc', caseInsensitive: false },
      'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'unknown'],
      'newlines-between': 'always',
      'pathGroupsExcludedImportTypes': [''],
      'pathGroups': [
        {
          pattern: '+(react|react-dom|react-router-dom|react-redux|@reduxjs/toolkit|react-custom-scrollbars|styled-components|react-tooltip|react-hook-form)',
          group: 'external',
          position: 'before',
        },
        {
          pattern: '@shared/**',
          group: 'internal',
          position: 'before',
        },
        {
          pattern: '@entities/**',
          group: 'internal',
          position: 'before',
        },
        {
          pattern: '@features/**',
          group: 'internal',
          position: 'before',
        },
        {
          pattern: '@widgets/**',
          group: 'internal',
          position: 'before',
        },
        {
          pattern: '@pages/**',
          group: 'internal',
          position: 'before',
        },
        {
          pattern: './*.+(less|css|svg)',
          group: 'sibling',
          position: 'after',
        },
      ],
    },
  ],
  // запрет неиспользуемых импортов
  'unused-imports/no-unused-imports': ERROR,
  // правило для использования расширений в импортах
  'import/extensions': [
    ERROR, 
    'never',
    {
      // разрешённые расширения
      api: 'always',
      constants: 'always',
      hooks: 'always',
      schema: 'always',
      services: 'always',
      store: 'always',
      styles: 'always',
      types: 'always',
      utils: 'always',
    }
  ],
};
