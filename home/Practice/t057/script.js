'use strict';

// filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemar'];    

// // будем плучать имена, которые меньше, чем 5 символов 

// const shortNames =names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);

// map

const answers = ['IvAn', 'AnnA', 'Hello'];

//возвращает callback функцией item нижнего регистра

const result = answers.map(item => item.toLocaleLowerCase());   

console.log(result);

