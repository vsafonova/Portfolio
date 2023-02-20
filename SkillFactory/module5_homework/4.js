// Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.

function randomRange(myMin, myMax) {
        return Math.floor(Math.random() * (myMax - myMin +1) +myMin);
    }
    
    console.log(randomRange(0,100))

    // let v = Math.floor(Math.random() * 101)