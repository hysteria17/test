// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// let arr = ["asd",'asdasd','zzzz','ppp'],
//     i = arr.join(', ');

// console.log(i);

let div = document.createElement('div'),
    text = document.createTextNode('This is me!');
document.body.appendChild(div);
div.textContent = "Hello, World!";
let arr = [1,15,4,23,7],
i = arr.sort(compareNum);

function compareNum(a,b) {
    return a-b;
}

console.log(i);

let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__ = soldier;
console.log(john);
console.log(john.armor);