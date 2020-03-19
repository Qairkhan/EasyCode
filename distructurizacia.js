const = user = {
    firstName: 'Wyngys',
    lastName: 'Qairkhan',
};


const {firstName, lastName, age = 30 } = user;

console.log(age);