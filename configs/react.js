import { WARN, ERROR, OFF } from './constants.js';

export const REACT_RULES = {
  'react/jsx-sort-default-props': OFF,
  // объявление state в конструкторе, в разработке не всегда нужен конструктор
  'react/state-in-constructor': OFF,
  //запрет на спред пропс {...props} в компоненте (отключено по результам голосования)
  'react/jsx-props-no-spreading': OFF,
  // обязательное использование defaultProps в компоненте (отключено по результам голосования)
  'react/require-default-props': OFF,
  // принудительная деструктуризация пропсов в теле компонентов кроме классов
  'react/destructuring-assignment': [ERROR, 'always', { ignoreClassFields: true, destructureInSignature: 'ignore' }],
  // базовый отступ для jsx
  'react/jsx-indent': [ERROR, 2, { checkAttributes: true, indentLogicalExpressions: true }],
  // базовый отступ для props
  'react/jsx-indent-props': [ERROR, 2],
  // многострочная jsx разметка, кроме единственного вложенного элемента
  'react/jsx-one-expression-per-line': [ERROR, { allow: 'single-child' }],
  // в каких файлах может содержаться jsx
  'react/jsx-filename-extension': [ERROR, { extensions: ['.ts', '.tsx'] }],
  // сортировка пропсов в компонентах
  'react/jsx-sort-props': [
    ERROR,
    {
      callbacksLast: true,
      shorthandFirst: true,
      shorthandLast: false,
      ignoreCase: false,
      noSortAlphabetically: false,
      reservedFirst: false,
    },
  ],
  // сортировка объявлений пропсов в компоненте
  'react/sort-prop-types': [
    ERROR,
    {
      callbacksLast: true,
      ignoreCase: false,
      requiredFirst: true,
      sortShapeProp: true,
      noSortAlphabetically: false,
    },
  ],
  // положение закрывающего тега элемента
  'react/jsx-closing-bracket-location': [WARN, 'line-aligned'],
  // положение первого пропа
  'react/jsx-first-prop-new-line': [WARN, 'multiline-multiprop'],
  // максимальное кол-во пропсов на одну строку
  'react/jsx-max-props-per-line': [WARN, { maximum: { single: 5, multi: 1 } }],
};