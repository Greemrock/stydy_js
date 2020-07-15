"use strict";

const arr = [1, 20, 26, 5, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

/*
arr[99] = 0;
console.log(arr.length);
console.log(arr);

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

console.log(arr.pop());

console.log(arr.push(10));

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}

const str = prompt("","");
const products = str.split(", ");   // split - строку переводит в массив
console.log(products);

const str = prompt("","");
const products = str.split(", ");   // .split(", ") - строку переводит в массив
products.sort();
console.log(products.join('; '));   // .join('; ') - массив переводит в строку

*/