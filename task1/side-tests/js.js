'use strict';

// Tasks

// let x = 5; console.log( x++ ); // 5
// console.log([] + false - null + true); //NaN
// let y = 1; let x = y =2; console.log(x); // 2
// []+1+2; //12
// alert("1"[0]); //1
// console.log(2 && 1 && null && 0 && undefined); // null
// 7) Нет
// 8) 3
// 9) false
// 10) Infinity
// 11) false
// 12) 2


// Continue

let num = 50;
if (num < 49) {
    console.log('Неверно!');
} else if (num > 100) {
    console.log("Много!");
} else {
    console.log('That it!');
}
(num == 51) ? console.log('Верно!') : console.log("Неверно!");

switch (num) {
    case num < 49:
        console.log('Неверно!');
        break;
    case num > 100:
        console.log('Много!');
        break;
    case num > 80:
        console.log('Все ещё много!');
        break;
    case 50:
        console.log('Верно!');
        break;
    default:
        console.log("Something went wrong!");
}


// while (num < 55) {
//     console.log(num);
//     num++;
// }

do {
    console.log(num);
    num++;
} while (num < 55);

for (let i = 1; i < 8; i++) {
    if (i == 6){
        continue;
    }
    console.log(i);
}