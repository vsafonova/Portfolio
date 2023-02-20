// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

let arr = [2, 4, 5, 7, NaN, 8, 9, 0, 3, 0, 'dfgdfg', null];
let arr2 = [2, 4, 5, 7,  0, 'dfgdfg', null, NaN];

function printNumbers (array) {
    let amountOdd = 0;
    let amountEven = 0;
    let amountZero = 0;
    for ( let i = 0; i < array.length - 1; i++) {
        if (typeof array[i] === 'number' && (!isNaN(array[i])))  {
            if (array[i] === 0) {
                amountZero++;
            } else 
                if (array[i] % 2 === 0) {
                amountEven++;
            } else {
                amountOdd++;
            }
        }
    }
    console.log(amountOdd,'odd',amountZero, 'zero', amountEven, 'even');
}

printNumbers(arr2)

// function getCount(a){
//     let countEven = 0;
//     let countOdd = 0;
//     let countZero = 0;
//     for(let i = 0; i < a.length; i++) {
//     if (typeof a[i] !=='number' || isNaN(a[i])) {
//         continue;
//     }   
//     if (a[i] === 0) {
//         countZero = countZero + 1;
//         continue;
//     } 
//     if (a[i] % 2 === 0) {
//         countEven = countEven +1;
//     } else {
//     countOdd = countOdd +1;
//     }
//     }
//     console.log(countEven);
//     console.log(countOdd);
//     console.log(countZero);
// }

// getCount(arr2)
