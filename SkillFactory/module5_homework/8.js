// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

let myMap = new Map();

myMap.set(1, 'number');
myMap.set('Привет', 'string');
myMap.set(false, 'boolean');

for (let elem of myMap) {
    console.log(elem);
}

