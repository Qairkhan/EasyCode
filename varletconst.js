var name = 'Wyngys' ;
console.log(name);
name = 'Wyn';
console.log(name);


var age;
console.log(age); //undefined
age = 25;
console.log(age); // vse ok

var $name = 'asd'; 
var _name = 'gfds';

var nameAge = 30; // нужно (кэмэл кэис)
var name_age = 20; // можно
var NameAge = 23; //не желательно (классы указываются с большой буквы)
var nameage = 22; // не желательно

var car = 'bmw';
var car = 'merc';
console.log(car); // merc /var можно объявить много раз , поэтому let лучше

console.log(car2); //undefined
var car2 = 'audi'; //всплытие 
console.log(car2); //