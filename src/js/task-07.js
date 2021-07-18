// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.В результате при перетаскивании ползунка будет меняться размер текста.


const text = document.getElementById("text")
console.log(text);

const range = document.getElementById("font-size-control");
console.log(range);

range.min = 1
range.max = 100
range.step = 10

// Начальные значения
range.value = 50
text.style.fontSize = range.value + "px"

// Динамические значения
range.onchange = function () {

    text.style.fontSize = this.value + "px"

    console.log(this.value)
}