// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input), подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка 'незнакомец'.


const input = document.querySelector("#name-input");

const inputLabelName = document.querySelector("#name-output");

const nameWithEmptyInput = inputLabelName.textContent;

// console.log(input);
// console.log(inputLabelName);
console.log(nameWithEmptyInput);

const onInputChange = function (event) {

    if (event.currentTarget.value.length !== 0)

        return (inputLabelName.textContent = event.currentTarget.value);

    inputLabelName.textContent = nameWithEmptyInput;
};

input.addEventListener('input', onInputChange);

