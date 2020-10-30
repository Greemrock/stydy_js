'use strict';

// new RegExp('pattern', 'flags');
// /pattern/flags
 
// const ans = prompt('Введите ваше число');

// const reg = /\d/g;
// console.log(ans.match(reg)); // - возвращает либо true, либо false

const str = 'My name is R2D2';

console.log(str.match(/\D/ig));

// \D - не числа
// \W - не буквы
// \S - не пробел


// \d - digtit ищем цифры
// \w - word ищем буквы
// \s - spaсes ищем пробелы
 
// i - вне зависимости от регистра
// g - глобал, поиск нескольких вхождений
// m - многострочный режим


// console.log(ans.search(reg)); - поиск по строке
// console.log(ans.match(reg)); // - возвращает массив

// const pass = prompt('Password');

// console.log(pass.replace(/./g, "*"));

// console.log('12-34-56'.replace(/-/g, ':'));  // - находит и заменяет "-" на ":"

