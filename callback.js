// function foo() {
//   console.log("Hello world");
// }

// foo();

// foo.field = "Wyngys";
// console.log(foo.field);

// const arr = ["Wyngys", "Altynai", "Gukhar", "Karla"];

// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i].length);
// }
// console.log(newArr);

// let newArr2 = [];
// for (let i = 0; i < arr.length; i++) {
//   newArr2.push(arr[i].toUpperCase());
// }
// console.log(newArr2);

const names = ["Wyngys", "Altynai", "Gukhar", "Karla"];

function mapArray(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i]));
  }
  return res;
}

function nameLength(elem) {
  console.log(elem);
  return elem;
}

function nameToUpperCase(elelem) {
  return elelem.toUpperCase();
}

const result = mapArray(names, nameLength);
const result2 = mapArray(names, nameToUpperCase);
console.log(result2);
