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
  .then( (json) => arrayOfTodos = json)
  // .then((json) => carrayOfTo(json));
  console.log('arrayOfTodos:',arrayOfTodos)
}

const logTodos = () => {
  console.log(arrayOfTodos)
}

const populateTodos = () => {
  // fetch('https://jsonplaceholder.typicode.com/todos')
  // .then((response) => response.json())
  // .then((json) => console.log(json));

  //get ol tag to insert list items
  const ol = document.getElementById('todo-list');

  for (let index = 0; index < arrayOfTodos.length; index++) {
    // create a new div element
    const li = document.createElement("li");
    // get title from object
    const title = arrayOfTodos[index].title
    // put title in the li element
    const listItemText = document.createTextNode(title);
    // add textNode to list element
    li.appendChild(listItemText)
    // add list item to ol element in DOM
    ol.appendChild(li)
    // document.body.insertBefore(li, ol);

    // const element = arrayOfTodos[index];
    // console.log('element:', element)

  }
}


// console.log(arrayOfTodos1[0].userId) // => 14
// console.log(arrayOfTodos1[1].userId) // => 20

