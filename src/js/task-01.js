// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента(тега h2) и количество элементов в категории(всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

const categories = document.querySelector('#categories');
// console.log(categories);

const numberCategory = categories.querySelectorAll('.item');
// console.log(numberCategory );

console.log(`В списке ${numberCategory.length} категории.`);


function listCategory() {
    numberCategory.forEach(category => {
        const title = category.querySelector('h2').textContent;
        console.log(`Категория: ${title}`);
        const numberCategory = category.querySelectorAll("li").length;
        console.log(`Количество элементов: ${numberCategory}`)

    })
};
listCategory()









