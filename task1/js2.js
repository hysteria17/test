// function showFirstMessage(text) {
//     alert(text);
// }

//Функциональное выражение
let calc = function(a,b) {
    return a + b;
};

//Стрелочная функция (ES 6)
let calc2 = (a,b) => a+b;

console.log(calc(3,4));
console.log(calc2(5,4));
console.log(retVar());

function retVar() {
    let num = 50;
    return num;
}

let str = "test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2px";

// console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));


//Функция возвращает функцию
let val = 7;
function createAdder() {
    function addNumbers(a,b) {
        let ret = a + b;
        return ret;
    }
    return addNumbers;
}
let adder = createAdder();
let sum = adder(val, 8);
console.log(sum);

//Замыкания
function createCounter() {
    let counter = 0;
    const myFunction = function() {
        counter = counter + 1;
        console.log(counter);
        return counter;
    };
    return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log('example increment', c1, c2, c3);

let c = 4;
const addX = x => n => n + x;
const addThree = addX(3);
let d = addThree(c);
console.log('example partial application', d);