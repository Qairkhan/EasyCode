const firstName = 'Wyngys';
const lastName = 'Qairkhan';
const age = 30;
const str = 'Hello my name is Wyngys';

let value;

value = firstName + ' ' + lastName;

value += 'I am ' + age;

value = firstName.length; //dlina

value = firstName[2]; // 3 simvol

value = firstName.toUpperCase();

value = str.indexOf('n') //poisk po stroke

value = str.includes ('my'); //true //poisk po stroke s otvetom boolean

value = str.slice(0, 5); // vyrejet iz stroki (Hello)

value = str.replace('Wyngys' , 'Wyn'); // zamena
console.log (value);