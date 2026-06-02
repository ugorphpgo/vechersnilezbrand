# vechar booking prototype

Статический HTML/CSS/JS прототип приложения для бронирования ресторанов. Проект не требует сборки: страницы можно открыть напрямую или поднять простой локальный сервер.

## Быстрый запуск

Вариант 1: открыть файл напрямую:

```text
index.html
```

Вариант 2: через локальный сервер из корня проекта:

```bash
npx serve .
```

или, если установлен Python:

```bash
python -m http.server 8766
```

После этого открыть:

```text
http://localhost:8766
```

Основные страницы:

- `index.html` — стартовая страница проекта.
- `app.html` — интерактивный прототип приложения.
- `brandbook.html` — брендбук и live-редактор темы.

## Структура

- `app.html` — разметка мобильного прототипа: карта, Home, брони, профиль, фильтры, нижняя навигация.
- `app.css` — все стили приложения: карта, карточки, drawer, bottom sheet, responsive.
- `app.js` — данные ресторанов и вся интерактивность.
- `brandbook.html` — описание палитры, типографики, компонентов и принципов.
- `brandbook.css` — стили брендбука и стартовой страницы.
- `brandbook.js` — копирование цветов, demo-состояния и подключение live-редактора.
- `theme-editor.js` — общий слой live-theme для `app.html` и `brandbook.html`.

## Как быстро менять цвета

Самый быстрый способ — открыть `brandbook.html` и использовать блок “Редактор в реальном времени”. Он меняет:

- основной бордовый;
- глубокий бордовый;
- фон приложения;
- цвет текста;
- масштаб шрифта;
- скругления;
- ширину карточек;
- размер слотов времени.

Изменения сохраняются в `localStorage` и применяются к открытому `app.html` через `BroadcastChannel`/`storage`. Лучше запускать проект через локальный сервер, чтобы обе страницы были на одном origin.

Если нужно поменять значения по умолчанию, редактировать:

```js
// theme-editor.js
const DEFAULT_THEME = {
  wine600: "#8f2638",
  wine700: "#741d2c",
  cream100: "#fbf6f1",
  ink900: "#21191b",
  fontScale: "1",
  radiusScale: "1",
  cardWidth: "290",
  slotScale: "1",
};
```

Если нужно поменять всю палитру вручную, базовые CSS-токены лежат в начале `app.css` и `brandbook.css` в блоке `:root`.

## Как менять оформление

Основные места в `app.css`:

- `:root` — палитра, радиусы, тени, цвета карты.
- `.phone` — размер и рамка мобильного макета.
- `.map-art`, `.map-grid`, `.map-park`, `.map-river`, `.map-road` — визуал карты.
- `.map-sheet` — нижняя draggable-панель со списком ресторанов.
- `.restaurant-card`, `.restaurant-photo`, `.slots`, `.slot` — карточки ресторанов и слоты времени.
- `.map-preview-card` — карточка ресторана по клику на пин.
- `.screen-home` и классы `home-*` — главная страница.
- `.screen-reservations` и классы `reservation-*` — экран броней.
- `.screen-profile` и классы `profile-*` — профиль.
- `@media (max-width: 520px)` — мобильная адаптация.

Брендбук и стартовая страница настраиваются в `brandbook.css`.

## Как менять рестораны, фильтры и слоты

Все данные ресторанов находятся в `app.js`:

```js
const RESTAURANTS = [
  {
    id: "oita",
    name: "OITA Soho",
    cuisine: "Японская идзакая",
    area: "Троицкое предместье",
    rating: 4.8,
    price: "$$$",
    neighborhood: "trinity",
    cuisineId: "japanese",
    features: [],
    tags: ["date", "wine"],
    tone: "green",
    pin: { x: 37, y: 31 },
    slots: [
      { time: "16:30", available: true },
      { time: "18:00", available: true },
    ],
  },
];
```

Что можно менять:

- `name`, `cuisine`, `area`, `rating`, `reviews`, `distance` — текст в карточках.
- `price` — внутренний tier цены (`$$`, `$$$`, `$$$$`), в UI отображается как `₽`.
- `neighborhood`, `cuisineId`, `features` — значения для расширенных фильтров.
- `tags` — быстрые верхние фильтры: `wine`, `date`, `terrace`, `chef`.
- `tone` — цветовая заглушка фото: `green`, `amber`, `dark`, `wine`.
- `pin.x`, `pin.y` — позиция пина на карте в процентах.
- `slots` — доступные и недоступные времена брони.

Быстрые фильтры сверху задаются в `FILTERS` в начале `app.js`.

## Как менять тексты

Статические тексты разметки лежат в HTML:

- навигация, заголовки и подсказки — `index.html`, `app.html`, `brandbook.html`;
- тексты экранов Home/Брони/Профиль — в основном `app.html`;
- тексты toast, labels, сортировки и динамические подписи — `app.js`.

## Как добавить реальные фото

Сейчас фото сделаны CSS-градиентами через `data-tone`. Для реальных изображений можно:

1. Добавить папку `assets/`.
2. Положить туда изображения ресторанов.
3. Добавить поле `image` в объекты `RESTAURANTS`.
4. В `renderList()`, `renderHomeDinnerCarousel()` и `showMapPreview()` проставлять `style="background-image:url(...)"` или CSS custom property.

Для простого прототипа достаточно заменить градиенты в блоке:

```css
.restaurant-photo,
.reservation-photo,
.map-preview-photo,
.home-card-photo {
  background: ...;
}
```

## Деплой на Vercel

Так как это статический проект:

- Framework Preset: `Other`
- Build Command: пусто
- Output Directory: `.`

Главная страница: `index.html`.

## Проверка после изменений

Минимальный чек:

1. Открыть `app.html`.
2. Проверить стартовый экран `Поиск`.
3. Кликнуть пин на карте.
4. Выбрать слот времени.
5. Подтвердить бронь.
6. Проверить экран `Брони`.
7. Открыть `brandbook.html`, поменять цвет или размер, проверить применение в `app.html`.

Проверка JS-синтаксиса:

```bash
node --check app.js
node --check brandbook.js
node --check theme-editor.js
```
