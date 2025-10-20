import { WARN, ERROR, OFF } from './constants.js';

export const STYLISTIC_RULES = {
  // управляет пустыми линиями до/после определённых конструкций
  '@stylistic/padding-line-between-statements': [
    ERROR, 
    { blankLine: 'always', prev: ['case', 'default'], next: '*' },
    { blankLine: 'always', prev: '*', next: 'return' },
  ],
  // запрет нескольких пустых линий подряд
  '@stylistic/no-multiple-empty-lines': [ERROR, { max: 1, maxBOF: 0 }],
  // оператор всегда впереди при переносе выражений на новую строку
  '@stylistic/operator-linebreak': [ERROR, 'before'],
  // перенос строки, отключен т.к. в windows и unix системах различное поведение
  '@stylistic/linebreak-style': OFF,
  // базовый отступ 2 пробела, у case 2 пробела от switch
  '@stylistic/indent': [
    ERROR,
    2,
    {
      SwitchCase: 1,
      MemberExpression: 1,
      ignoredNodes: ['JSXElement'],
    },
  ],
  // длина строки
  '@stylistic/max-len': [WARN, { code: 120, ignoreStrings: true }],
  // расположение скобок у объектов
  '@stylistic/object-curly-newline': [
    ERROR,
    {
      ObjectPattern: { consistent: true },
      ObjectExpression: { consistent: true },
    },
  ],
  // порядок переноса строк у управляющих конструкций (if, while и т.д.)
  '@stylistic/brace-style': [ERROR, '1tbs'],
  // требует точку с запятой в конце любого выражения
  '@stylistic/semi': [ERROR, 'always'],
  // задаёт тип кавычек для строк
  '@stylistic/quotes': [ERROR, 'single'],
  // задаёт тип кавычек для параметров объектов
  '@stylistic/quote-props': [ERROR, 'consistent-as-needed'],
  // задаёт тип кавычек для строковых пропсов
  '@stylistic/jsx-quotes': [ERROR, 'prefer-double'],
};