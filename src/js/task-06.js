// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// < input
// type = "text"
// id = "validation-input"
// data - length="6"
// placeholder = "Введи 6 символов"
//     />
//     Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid.

const input = document.querySelector("#validation-input");

const checkValueLength = Number(input.dataset.length)
console.log(checkValueLength);

const inputValue = input.addEventListener('input', onInputChange);

let inputValueLength

function onInputChange(event) {
    return (inputValueLength = event.currentTarget.value.length)
}


const onInputFocus = function () {
    console.log('"input in focus"')
    input.classList.add("#validation-input")
    input.classList.remove("valid");
    input.classList.remove("invalid");

}

input.addEventListener('focus', onInputFocus);



const onInputBlur = function () {
    if (inputValueLength !== 0) {
        input.classList.remove("#validation-input")
        inputValueLength === checkValueLength ?
            input.classList.add("valid") : input.classList.add("invalid");
    }
}

input.addEventListener('blur', onInputBlur);
