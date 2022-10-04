# goit-js-hw-06

<!--  -->

Завдання 6

Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його
вміст щодо правильної кількості введених символів.

• Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті
data-length.

• Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо
неправильна кількість - червоним.

Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у
вихідні файли завдання.

<!--  -->

Завдання 7

Напиши скрипт, який реагує на зміну значення input#font-size-control (подія
input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В
результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

<!--  -->

Завдання 8

Напиши скрипт управління формою логіна.

• Обробка відправлення форми form.login-form повинна відбуватися відповідно до
події submit.

• Під час відправлення форми сторінка не повинна перезавантажуватися.

• Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі
поля повинні бути заповнені.

• Якщо користувач заповнив усі поля і відправив форму, збери значення полів в
об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням
властивості. Для доступу до елементів форми використовуй властивість elements.

• Виведи об'єкт із введеними даними в консоль і очисти значення полів форми
методом reset.

<!--  -->

Завдання 9

Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по
кліку на button.change-color і виводить значення кольору в span.color.

Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() { return
`#${Math.floor(Math.random() * 16777215) .toString(16) .padStart(6, 0)}`; }

<!--  -->

Завдання 10 (виконувати не обов'язково)

Напиши скрипт створення і очищення колекції елементів. Користувач вводить
кількість елементів в input і натискає кнопку Створити, після чого рендериться
колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція
створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

• Розміри найпершого <div> - 30px на 30px.

• Кожен елемент після першого повинен бути ширшим і вищим від попереднього на
10px.

• Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй
готову функцію getRandomHexColor для отримання кольору.

Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб
видаляючи всі створені елементи.
