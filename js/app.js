// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
  {
  "userId": 14,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
{
  "userId": 20,
  "id": 2,
  "title": "delectus aut autem",
  "completed": false
}]

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then( (response) => response.json())
  // .then( (json) => arrayOfTodos = json)
  .then((json) => console.log(json));
}

const logTodos = () => {
  console.log(arrayOfTodos)
}

const populateTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => response.json())
  .then((json) => console.log(json));
  // create an element <li>
  // get parent element <ol>
  // 
}


// console.log(arrayOfTodos1[0].userId) // => 14
// console.log(arrayOfTodos1[1].userId) // => 20