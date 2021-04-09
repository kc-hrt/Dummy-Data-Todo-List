// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
//   {
//   "userId": 14,
//   "id": 1,
//   "title": "waka waka",
//   "completed": false
// },
// {
//   "userId": 20,
//   "id": 2,
//   "title": "tootsy wootsy",
//   "completed": false
// }
]

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then( (response) => response.json())
  .then( (json) => arrayOfTodos = json)
  // .then((json) => carrayOfTo(json));
  console.log('arrayOfTodos:',arrayOfTodos)
}

const fetchUserTodos = () => {
  console.log(document.getElementById("userTodos").value);
  fechURL = 'https://jsonplaceholder.typicode.com/todos' + '?userId=' + document.getElementById("userTodos").value
  console.log(fechURL)
  
  fetch(fechURL)
  .then( (response) => response.json())
  .then( (json) => arrayOfTodos = json)
  console.log('arrayOfTodos:',arrayOfTodos)
}

const logTodos = () => {
  console.log(arrayOfTodos)
}

const populateAllTodos = () => {
  // fetch('https://jsonplaceholder.typicode.com/todos')
  // .then((response) => response.json())
  // .then((json) => arrayOfTodos = json)

  // .then((json) => arrayOfTodos(json));

  // clear content before repopulating
  document.getElementById('todo-list').innerHTML = "";


  console.log('arrayOfTodos:',arrayOfTodos)
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


const populateUserTodos = () => {
  console.log('arrayOfTodos:',arrayOfTodos)
  
  // clear content before repopulating
  document.getElementById('todo-list').innerHTML = "";
  
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
// const populateUserTodos = () =>  populateAllTodos()




const resetPage = () => {
  document.getElementById('todo-list').innerHTML = "";
}