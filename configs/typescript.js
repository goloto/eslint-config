import { OFF, ERROR } from './constants.js';

export const TYPESCRIPT_RULES = {
  '@typescript-eslint/camelcase': OFF,
  '@typescript-eslint/naming-convention': [
    ERROR,
    {
      selector: 'interface',
      format: ['PascalCase'],
      custom: {
        regex: '^I[A-Z][A-Za-z0-9]+$',
        match: true,
      },
    },
    {
      selector: 'typeAlias',
      format: ['PascalCase'],
      custom: {
        regex: '^T[A-Z][A-Za-z0-9]+$',
        match: true,
      },
    },
    {
      selector: 'enum',
      format: ['PascalCase'],
      custom: {
        regex: '^E[A-Z][A-Za-z0-9]+$',
        match: true,
      },
    }, 
    { 
      selector: 'enumMember',
      format: ['StrictPascalCase'],
    }
  ],
  // требует указания type для импортов типов; разрешает использовать import в типах
  '@typescript-eslint/consistent-type-imports': [ERROR, { 
    disallowTypeAnnotations: false,
    prefer: 'type-imports'
  }],
  // требует указания as const для всех неизменяемых примитивных констант
  '@typescript-eslint/prefer-as-const': ERROR,
  // задаёт предпочитаемый тип по-умолчанию
  '@typescript-eslint/consistent-type-definitions': [ERROR, 'interface'],
  // запрещает ts-комментарии
  '@typescript-eslint/ban-ts-comment': OFF,
  '@typescript-eslint/no-unused-vars': [
    ERROR,
    {  
      args: 'all',
      argsIgnorePattern: '^_',
      caughtErrors: 'all',
      caughtErrorsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      ignoreRestSiblings: true
    }
  ],
  // запрещает не-инициализированные enum
  '@typescript-eslint/prefer-enum-initializers': ERROR,
};