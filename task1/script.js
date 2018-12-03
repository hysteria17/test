'use strict';

let money, date;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    date = prompt("Введите дату в формате YYYY-MM-DD");

    //input check
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}

start();
let appData = {
    budget: money,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let article = prompt("Введите обязательную статью расходов в этом месяцу?"),
                articleValue = prompt("Во сколько обойдется?");
        
            if (typeof(article) === 'string' && typeof(article) != null && typeof(articleValue) != null
                && article != '' && articleValue != '' && article.length < 50) {
                
                console.log("done");
                appData.expenses[article] = articleValue;
        
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Бюджет на 1 день: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay >= 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i<4; i++){
            appData.optionalExpenses[i] = prompt("Статья необязательных расходов?");
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '')
        if (typeof(items) != 'string' && typeof(items) == null && items == '') {
            console.log("Вы ввели некорректные данные или не ввели их вовсе")
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то ещё?'));
            appData.income.sort();            
        }
        appData.income.forEach( (itemarr,i) => {
            console.log("Способы доп. заработка: " + (i+1) + " - " + itemarr);
        });    
    }

};


for (var key in appData) {
    console.log("Наша программа включает в себя даннные: " + key + " - " + appData[key]);
}



// // While
// let i = 0;
// while (i < 2) {
//     let article = prompt("Введите обязательную статью расходов в этом месяцу?"),
//     articleValue = prompt("Во сколько обойдется?");

//     if (typeof(article) === 'string' && typeof(article) != null && typeof(articleValue) != null
//         && article != '' && articleValue != '' && article.length < 50) {

//         i++;
//         console.log("done");
//         appData.expenses[article] = articleValue;
//     }
// }

// //do while
// let i = 0;
// do {
//     let article = prompt("Введите обязательную статью расходов в этом месяцу?"),
//     articleValue = prompt("Во сколько обойдется?");

//     if (typeof(article) === 'string' && typeof(article) != null && typeof(articleValue) != null
//         && article != '' && articleValue != '' && article.length < 50) {
        
//         i++;
//         console.log("done");
//         appData.expenses[article] = articleValue;

//     }
// } while (i < 2);
