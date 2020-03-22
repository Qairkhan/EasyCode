fetch(("https://jsonplaceholder.typicode.com/posts")
    .then(response => console.log(response))
    .catch(err => console.log(err));