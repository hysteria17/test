'use strict';

var money = prompt("Ваш бюджет на месяц?");
var date = prompt("Введите дату в формате YYYY-MM-DD");

var appData = {
    money: money,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

var article = prompt("Введите обязательную статью расходов в этом месяцу?");
var articleValue = prompt("Во сколько обойдется?");
appData.expenses[article] = articleValue;

article = prompt("Введите обязательную статью расходов в этом месяцу?");
articleValue = prompt("Во сколько обойдется?");
appData.expenses[article] = articleValue;

alert("Бюджет на 1 день: " + (+appData.money - (+Object.values(appData.expenses)[0] + 
                              +Object.values(appData.expenses)[1]))/30);
