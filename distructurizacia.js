const = user = {
    firstName: 'Wyngys',
    lastName: 'Qairkhan',
};


const {firstName: name, lastName, age = 30 } = user; //для высоза firstName пишется name

console.log(name);


const colors = ['white', 'black', 'red'];

const [w, b, red ] = colors;

console.log (colors);