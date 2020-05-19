const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(Math.random()), 10000);
  setTimeout(() => reject('error'), 10000);
});

console.log(promise);

promise
  .then(x => {
    console.log('x',x);
    return x;
  })

  .then(y => console.log('y', y));
  .catch(err => console.log(err));
  
