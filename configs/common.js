import { ERROR, OFF } from './constants.js';

export const COMMON_RULES = {
  // запрет символа подчёркивания в начале имён кроме this
  'no-underscore-dangle': [ERROR, { allowAfterThis: true }],
  // запрет объявления анонимных функций с помощью ключевого слова function
  'func-names': [ERROR, 'as-needed', { generators: 'never' }],
  // пустая строка перед return
  'newline-before-return': ERROR,
  // return в функции, отключен из-за конфликтов в switch/case
  'consistent-return': OFF,
  // не всегда методы класса должны использовать логику с this
  'class-methods-use-this': OFF,
  // Переопределение входящих параметров
  'no-param-reassign': [ERROR, { props: false }],
  // минимальная длина имен (по-умолчанию от 2 символов)
  'id-length': [ERROR, { exceptions: ['_', 'i', 'j', 'x', 'y', 'z', 'p', 'm'] }],
  // запрет на использование alert
  'no-alert': ERROR,
  // ++ только для for-цикла
  'no-plusplus': [ERROR, { allowForLoopAfterthoughts: true }],
  // наименования переменных, функций и тд только в camelСase
  'camelcase': [
    ERROR,
    {
      allow: [
        'UNSAFE_componentDidMount', 
        'UNSAFE_componentWillReceiveProps', 
        'UNSAFE_componentWillUpdate',
        'ApplicationFullView_AcquisitionObject',
        'ApplicationFullView_Criteria',
        'ApplicationFullView_Applicant',
        'ApplicationFullView_Child',
        'ApplicationFullView_Mortgage',
        'ApplicationFullView_Payout',
        'ApplicationFullView_RealEstateObject',
        'MortgageInput_AcquisitionObject',
        'MortgageInput_RealEstateObject',
        'MortgageView_AcquisitionObject',
        'MortgageView_RealEstateObject',
      ],
    },
  ],
  // можно писать с большой буквы только имена классов (конструкторов)
  'new-cap': [
    ERROR,
    {
      capIsNewExceptions: ['SortableContainer', 'SortableElement', 'List', 'Map', 'Set'],
    },
  ],
  // наличие скобок у управляющих конструкций (if, while и т.д.)
  'curly': [ERROR, 'all'],
  // позволяет прохождение вариантов switch без break или return
  'no-fallthrough': OFF,
};