// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

let arr = [2, 4, 5, 7, 8, 9, 0, 'dfgdfg', null, NaN];
let countEven = 0;
let countOdd = 0;
let countZero = 0

arr.forEach( function(item){
    if (typeof item !=='number' || isNaN(item)) {
        return;
    }   
    if (item === 0) {
        countZero = countZero + 1;
        return;
    } 
    if (item % 2 === 0) {
        countEven = countEven +1;
    } else {
    countOdd = countOdd +1;
    }
})

console.log(countEven)
console.log(countOdd)
console.log(countZero)