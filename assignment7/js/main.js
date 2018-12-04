let startButton = document.getElementById('start');
let resultTable = document.querySelector('.result-table');
// let resultTable = document.getElementsByClassName('result-table')[0];
// let budget = document.querySelector('.budget');
// let budgetValue = document.querySelector('.budget-value');
// let daybudget = document.querySelector('daybudget-value');
let divArray = [];
console.log(resultTable);
let arr = resultTable.children;

for (let div of arr) {
    if (div.className.endsWith('value')) {
        divArray.push(div);
    }
}

console.log(divArray);
// resultTable.childNodes.forEach(function(div) {
//     if(div.nodeType == 1) {
//         if (div.className.endsWith('value')) {
//             divArray.push(div);
//         }
//     }
// });
let expenses = document.getElementsByClassName('expenses-item');
console.log(expenses);

let confirmBtn = document.getElementsByTagName('button')[0];
console.log(confirmBtn);

let calculateBtn = document.getElementsByTagName('button')[2];
console.log(calculateBtn);

let optionalExpenses = document.querySelectorAll('.optionalexpenses-item');

let income = document.querySelector('#income');
let checkbox = document.querySelector('#savings');
let sum = document.querySelector('#sum');
let percent = document.querySelector('#percent');

let year = document.querySelector('.year-value');
let month = document.querySelector('.month-value');
let day = document.querySelector('.day-value');
