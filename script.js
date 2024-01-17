"use strict";

// alert('hello')
// const answer = +prompt("Вам есть 18?", "18");
// console.log(answer + 5);

const answers = [];


console.log(typeof(answers));

// интерполяция 

const category = 'toys';

// старый метод

console.log('https://someurl.com/' + category + '/' + '4');

//новый метод

console.log(`https://someurl.com/${category}/4`);  //косые кавычки

const user = "Ivan";

alert(`Привет, ${user}`);

let incr = 10,
    decr = 10;

incr++;  //увеличение на 1
decr--;  //уменьшение на 1  

console.log(5%2); //получение остатка от деления 5 на 2

console.log(2*3 == 8); //сравнение
console.log(2*3 === '8'); //строгое сравнение (тип данных)







