let menuItems = document.getElementsByClassName('menu-item');
let menu = document.querySelector('.menu');
menu.insertBefore(menuItems[2],menuItems[1]);

document.body.style.background = "url(img/apple_true.jpg) center no-repeat";

let title = document.getElementById('title');
title.textContent = "Мы продаем только подлинную технику Apple";
let adv = document.querySelector('.adv');
let divColumn = document.getElementsByClassName('column');
divColumn[1].removeChild(adv);

let opinion = prompt("Как вы относитесь к технике Apple?");
let opinionPrompt = document.getElementById('prompt');
opinionPrompt.textContent = opinion;
