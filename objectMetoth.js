let obj = {
  name: "Wyngys"
  info: {
      skills: ['css', 'js'],
  },
};

let obj2 = {
    name: 'Gaara',
  age: 20
};

let newObj = Object.assign({}, obj, obj2);
console.log(newObj);
newObj = JSON.parse(JSON.stringify(obj));
console.log(newObj.info === obj.info);


let keys = Object.keys(obj2)

let entries = Object.entries(obj2);
let fromEntries = Object.fromEntries(['a', 'value']);