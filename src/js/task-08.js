// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const btnCreateRef = document.querySelector('button[data - action = “render”]');
const btnDestroyRef = document.querySelector('button[data - action = “destroy”]');
const inputQntityRef = document.querySelector('div#controls input');
const bigBox = document.querySelector('div#boxes');

let startWidth = 20;
let startHeight = 20;

function createBoxes(amount) {
    let num = inputQntityRef.value;
    for (let i = 0; i < num; i += 1) {
        const addDiv = document.createElement("div");
        startWidth += 10;
        startHeight += 10;
        addDiv.style = 'background - color: ' + '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase() + ';' + 'width: ${startWidth}px; height: ${startHeight}px;';
        bigBox.appendChild(addDiv);
        console.log(bigBox.children);
    }
}

function destroyBoxes(event) {
    bigBox.innerHTML = '';
    startWidth = 20;
    startHeight = 20;
};

btnCreateRef.addEventListener('click', createBoxes);
btnDestroyRef.addEventListener('click', destroyBoxes);
