'use strict';

// filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemar'];    

// // будем плучать имена, которые меньше, чем 5 символов 

// const shortNames =names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);

// map

// let answers = ['IvAn', 'AnnA', 'Hello'];

//возвращает callback функцией item нижнего регистра

// answers = answers.map(item => item.toLocaleLowerCase());   

// console.log(answers);

// every/some 
// возвращают булиновые значения true or false

// const some = [4, 'qwe', 'adsfgmjnbt'];

// some - выводит true, когда хоть один элемент искомого формата

// console.log(some.some(item => typeof(item) === 'number'));

// every - выводит true, когда все элементы искомого формата

// console.log(some.every(item => typeof(item) === 'number'));

// reduce

// const arr = [4, 5, 1, 3, 2, 6];

// // третий аргумент метода reduce устанавливает начальное значение sum
// //                         3       4
// //                         4       5
// //                         9       1
// const res = arr.reduce((sum, current) => sum + current, 3);
// console.log(res);

// const arr = ['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);