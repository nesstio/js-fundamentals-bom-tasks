// Задано сторінку з 3 кнопками . Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
//         1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
//         2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
//         3) 3-я кнопка – при наведенні колір фону міняється на коричневий
//         
// Запустіть виконане завдання за допомогою Live Server 
// Перевірте виконання за допомогою команди node tests/task2.test.js

const buttonChageBackgroundToBlue = document.getElementById("button1");
const backgoround = document.body;
const buttonChageBackgroundToPink = document.getElementById("button2");
const buttonChageBackgroundToBrown = document.getElementById("button3");

buttonChageBackgroundToBlue.addEventListener('click', ()=>{
    backgoround.style.backgroundColor = "blue";
});

buttonChageBackgroundToPink.addEventListener('dblclick', () => {
    backgoround.style.backgroundColor = "pink";
});

buttonChageBackgroundToBrown.addEventListener('mouseover', () => {
    backgoround.style.backgroundColor = "brown";
});
