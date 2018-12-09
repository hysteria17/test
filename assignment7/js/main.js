'use strict';

// let startButton = document.getElementById('start');
// let resultTable = document.querySelector('.result-table');
// // let resultTable = document.getElementsByClassName('result-table')[0];
// // let budget = document.querySelector('.budget');
// // let budgetValue = document.querySelector('.budget-value');
// // let daybudget = document.querySelector('daybudget-value');
// let divArray = [];
// console.log(resultTable);
// let arr = resultTable.children;

// for (let div of arr) {
//     if (div.className.endsWith('value')) {
//         divArray.push(div);
//     }
// }

// console.log(divArray);
// // resultTable.childNodes.forEach(function(div) {
// //     if(div.nodeType == 1) {
// //         if (div.className.endsWith('value')) {
// //             divArray.push(div);
// //         }
// //     }
// // });
// let expenses = document.getElementsByClassName('expenses-item');
// console.log(expenses);

// let confirmBtn = document.getElementsByTagName('button')[0];
// console.log(confirmBtn);

// let calculateBtn = document.getElementsByTagName('button')[2];
// console.log(calculateBtn);

// let optionalExpenses = document.querySelectorAll('.optionalexpenses-item');

// let income = document.querySelector('#income');
// let checkbox = document.querySelector('#savings');
// let sum = document.querySelector('#sum');
// let percent = document.querySelector('#percent');

// let year = document.querySelector('.year-value');
// let month = document.querySelector('.month-value');
// let day = document.querySelector('.day-value');

let money, date;

let startBtn = document.getElementById("start"),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


	expensesItem = document.getElementsByClassName('expenses-item'),
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let buttons = document.querySelectorAll('button');
buttons.forEach(function(btn) {
    btn.disabled = true;
});
startBtn.disabled = false;

startBtn.addEventListener('click', function(){    
    date = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?");

    //input check
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
    appData.budget = money;
    appData.timeData = date;

    budgetValue.textContent = money.toFixed();
    let dateObj = new Date(Date.parse(date));
    yearValue.value = dateObj.getFullYear();
    monthValue.value = dateObj.getMonth() + 1;
    dayValue.value = dateObj.getDate();

    buttons.forEach(function(btn) {
        btn.disabled = false;
    });
});

expensesBtn.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let article = expensesItem[i].value,
            articleValue = expensesItem[++i].value;
    
        if (typeof(article) === 'string' && typeof(article) != null && typeof(articleValue) != null
            && article != '' && articleValue != '' && article.length < 50) {
            
            console.log("done");
            appData.expenses[article] = articleValue;
            sum += +articleValue;
    
        } else {
            i--;
        }
    }

    expensesValue.textContent = sum;

});

optionalExpensesBtn.addEventListener('click', function() {
    for (let i = 0; i<optionalExpensesItem.length; i++){
        appData.optionalExpenses[i] = optionalExpensesItem[i].value;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBtn.addEventListener('click', function() {
    if (appData.budget != undefined) {
        appData.outcome = 0;
        for (let i in appData.expenses) {
            appData.outcome += +appData.expenses[i];
        }
        appData.moneyPerDay = ((appData.budget - appData.outcome)/ 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;
    
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay >= 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка!";
    }
});

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;

});

checkSavings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = sumValue.value,
            percent = percentValue.value;
        
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = sumValue.value,
            percent = percentValue.value;
        
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

// start();
let appData = {
    budget: money,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


for (var key in appData) {
    console.log("Наша программа включает в себя даннные: " + key + " - " + appData[key]);
}