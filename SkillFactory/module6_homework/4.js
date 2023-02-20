function printNum(a, b) {
    let intervalId;
    function print() {
        if ( print ) {
            console.log(a);
            clearInterval(intervalId)
        }
    }
    intervalId = setInterval(print, 1000);
}

printNum(5, 15)

// положить идентификатор интервала в переменную

// function calcSum (a, b) {
//     return a + b;
// }

// let func = calcSum(2, 3);
// console.log(func)

// function setInterval2(func, delay, ...args) {
//     func(...args);
//     return 1;
// }