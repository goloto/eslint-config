import { WARN, ERROR, OFF } from './constants.js';

export const IMPORT_RULES = {
  'no-restricted-imports': [ERROR, { 
    paths: [
      // запрет импорта пакетов ui-kit, форки которых уже есть в проекте
      '@eisgs/attach',
      '@eisgs/tabs', 
      '@eisgs/table',
      '@eisgs/datepicker', 
      '@eisgs/typography', 
      '@eisgs/pagination',
      '@eisgs/input',
      '@eisgs/icon',
      '@eisgs/toast',
      '@eisgs/drawer',
      '@eisgs/preloader',
      '@eisgs/button',
      '@eisgs/dropdown',
      '@eisgs/modal',
      '@eisgs/collapse-panel',
      '@eisgs/status',
      '@eisgs/checkbox',
      '@eisgs/button-with-dropdown',
      '@eisgs/clear-button',
      '@eisgs/go-back-button',
      '@eisgs/switcher-button',
      '@eisgs/chips',
      '@eisgs/hint',
      '@eisgs/radio',
      '@eisgs/tooltip',
      '@shared/generated'
    ],
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
          pattern: '@domrf-digital-ui/**',
          group: 'external',
          position: 'after',
        },
        {
          pattern: '@eisgs/**',
          group: 'external',
          position: 'after',
        },
        {
          pattern: '@lib/**',
          group: 'external',
          position: 'after',
        },
        {
          pattern: 'styled-components/**',
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
