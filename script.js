"use strict";
// Создание функции генератора добавление * к function
function* generator() {
    yield 'S';
    yield 'c';
    yield 'i';
    yield 'p';
    yield 't';
}

const str = generator();
console.log(str.next().value); // Обратиться напрямую к значению
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());

console.log(str.next()); // Вывод показывает генератор закончился 
// -----------------------------------------------

function* count(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}
// Можно перебрать через for of
for (let k of count(7)) {
    console.log(k);
}

const counter = count(7);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);

