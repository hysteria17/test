'use strict';

let money = +prompt("Ваш бюджет на месяц?");
let date = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

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

appData.moneyPerDay = appData.budget / 30;

alert("Бюджет на 1 день: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay >= 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}
