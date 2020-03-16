const user = {
    firsName: 'Wyngys',
    age: 26,
    isAdmin: true,
    email: 'asd@gmail.com',
    'user-addres': {
        city: 'Minsk'
    },
    skills: ['html', 'css', 'js']
};

let value;
let prob = 'skills';
value=user.firsName;

value = user[prob];
console.log(value);
// console.log(user);