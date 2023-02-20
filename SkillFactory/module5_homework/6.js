// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
// Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

let arr = [3, 3, 3, 3];
let result = true;
const number = arr[0];


for( let i = 0; i <= arr.length - 1; i++) {
    if(arr[i] === number){
        result = true
    } else {
        result = false;
        break
    }
}

// arr.forEach(function (item) {
	
// })

console.log(result)