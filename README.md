# Проект: Приложение по поиску отелей

## Описание
Web приложение для поиска отелей, которое имеет два экрана.
Переход между экранами осуществляется при помощи [react-dom-router] (https://v5.reactrouter.com/web/guides/quick-start).
На первом экране располагается окно авторизации с валидацией, реализованной на стороне клиентской части приложения посредством пакета [react-hook-form] (https://react-hook-form.com/).
На втором экране имеется несколько панелей. Левая верхняя панель осуществляет поиск  отелей исходя из места заселения, даты и количества дней. На правой панель выводятся результаты поиска с возможность просмотра рейтинга. В левой нижней панели появляются отели ,добавленные в избранное.
Запросы на сервер осуществляются при помощи созданного хука useFetchHotels. в качестве сервера выступает [API](https://support.travelpayouts.com/hc/ru/articles/115000343268-API-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85-%D0%BE%D1%82%D0%B5%D0%BB%D0%B5%D0%B9#price).

### Технологии используемые в проекте
1. [React](https://ru.reactjs.org/).
2. Технология [Grid-Layout](https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout).
3. [CSS-модули](https://frontender.info/css-modules-part-1-need/).
4. [React-dom-router](https://v5.reactrouter.com/web/guides/quick-start).
5. [Date-fns](https://date-fns.org/).
6. [Font-awesome](https://fontawesome.com/).
7. [React-hook-form](https://react-hook-form.com/).

## Запуск проекта
После клонирования репозитория производится установка зависимостей yarn install. Далее командой yarn start осуществляется сборка  приложения.
Ссылка на задеплоинный проект [Search-Hotels](https://heartfelt-vacherin-815cb6.netlify.app)

## Планы по развитию проекта
В дальнейшем планируется адаптациб под мобильные устройства.Добавить стилизацию кнопок на панели "Избранное".
