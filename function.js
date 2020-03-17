// function sayHello(firstName, lastName) {
//   console.log(firstName, lastName);
//   console.log("Hello world");
//   return `Hello ${firstName} ${lastName}`;
// }

// let res = sayHello("Wyngys", "Qairkhan");
// console.log(res);

let x = 10;
function foo(x) {
  x = 20;
  console.log(x);
  return x;
}
foo();
console.log(x);
