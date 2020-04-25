const user = {
    firsName: 'Wyngys',
    age: 26,
    isAdmin: true,
    email: 'asd@gmail.com',
    'user-addres': {
        city: 'Minsk'
    },
    skills: ['html', 'css', 'js', 'nodeJS', 'ReactJS']
};

let value;
let prob = 'skills';
value=user.firsName;

value = user[prob];


user.firsName = 'Wyn';
value = user.firsName;

user.info = 'Soma info';

value=user.info // dobavili svoistvo

user.plan.basic = 'Basic'; //owibka budet // nel'zya dobavit vlojnostivlojnost

// console.log(user);
console.log(value);