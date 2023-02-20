// Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.

let arr = [2, 'fbgjfhj', 67, 98, {John: 67}, ]
// let arr = [8, 15, 20, 35, 46, 60,];
console.log(arr.length);

// for ( let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

arr.map(function(item) {
    console.log(item);
})