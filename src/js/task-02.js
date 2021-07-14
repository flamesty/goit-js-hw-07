// В HTML есть пустой список ul#ingredients.

// < ul id = "ingredients" ></ul >
//     В JS есть массив строк.

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM - узлов используй document.createElement().

const listIngredients = document.querySelector("#ingredients")
listIngredients.textContent = "ИНГРЕДИЕНТЫ:"
// console.log(listIngredients);

const makeList = function (ingredients) {
    const acc = [];
    ingredients.forEach(el => {
        const listEl = document.createElement("li");
        listEl.textContent = `${el}`
        acc.push(listEl)
    })
    return acc
};

listIngredients.append(...makeList(ingredients))

console.log(listIngredients);