// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


const btnIncrement = document.querySelector('[data-action="increment"]');

const btnDecrement = document.querySelector('[data-action="decrement"]');

const counter = document.querySelector('#value');


let counterNumber = Number(counter.textContent);


const onIncrement = function () {

    counter.textContent = counterNumber += 1;

    console.log('+');
}

btnIncrement.addEventListener('click', onIncrement)


const onDecrement = function () {

    counter.textContent = counterNumber -= 1;

    console.log('-');
}

btnDecrement.addEventListener('click', onDecrement)
