// Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера
//  і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.
// Для запуску використовувати Live Server
// Для перевірки node tests/task4.test.js

const windowWidth = document.getElementById("widthValue");
const windowHeight = document.getElementById("heightValue");

window.addEventListener("resize", () => {
    windowWidth.textContent = window.innerWidth;
    windowHeight.textContent = window.innerHeight;    
});