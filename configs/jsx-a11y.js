import { OFF } from './constants.js';

export const ACCESSABILITY_JSX_RULES = {
  // отключена обязательная привязка label к полю ввода
  'jsx-a11y/label-has-associated-control': OFF,
  // проверка href в ссылке, не корректно работает с компонентами поверх html-ссылок
  'jsx-a11y/anchor-is-valid': OFF,
  // отключено правило для читалок и людей с ограниченными способностями
  'jsx-a11y/click-events-have-key-events': OFF,
  // разрешаем интерактивные события на статических и не интерактивных элементах (div, span)
  'jsx-a11y/no-static-element-interactions': OFF,
  // отключение запрета прописывания атрибута role для неинтерактивных элементов, для которых есть обработчик клика
  'jsx-a11y/no-noninteractive-element-interactions': OFF,
};
