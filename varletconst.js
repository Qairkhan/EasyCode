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

console.clear();
// console.log (nickname); //нельзя error
// let nickname = 'wyngys'; //нельзя!! error
// let nickname = 'wyng'; //нельзя!!! error

// const firstname = 'Tom'; // нельзя
// firstname = 'Json'// переопределять 

// const firstname2; //нельзя
// firstname2 = 'Muha' // инициализировать без значения 


const user = {      // нельзя переопределить 
    name: 'Dima',
    age: 25,
};
user.age = 30; // можно изменить значение 
console.log(user);