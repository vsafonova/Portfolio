// Дана переменная Х, которая может принимать любое значение. 
// Написать программу, которая в зависимости от типа данных Х выводит в консоль сообщение вида: «X — число».

// Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».

let X = []; 

if (typeof X === 'number'|| typeof X === 'string' || typeof X === 'boolean') {
    console.log (typeof X);
} else {
    console.log ('Тип X не определен');
}