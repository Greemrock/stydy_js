'use strict';

// filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemar'];    

// будем плучать имена, которые меньше, чем 5 символов 

const shortNames =names.filter(function(name) {
    return name.length < 5;
});

console.log(shortNames);

