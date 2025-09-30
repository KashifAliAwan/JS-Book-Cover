// let arr = ['apple','banana','kiwi','avacado'];
// const ol = document.querySelector('.list');

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     ol.innerHTML += `<li>${arr[i]}</li>`

// }

// let arr = ['apple','banana','kiwi','avacado'];
// const ol = document.querySelector('.list');

// let items = "";
// for (let i = 0; i < arr.length; i++) {
//     items += `<li>${arr[i]}</li>`;
// }
// ol.innerHTML = items;

let input = document.querySelector('#input');
let ul = document.querySelector('#ul');
let items = [];


function renderArray() {
    ul.innerHTML = ''
    for (let i = 0; i < items.length; i++) {
        ul.innerHTML += `<li>${items[i]}</li><button onclick="deleteTodo(${i})">Delete</button> <button onclick="editTodo(${i})">Edit_Todo</button>`
    }
}
function adTodo() {
    items.push(input.value)
    renderArray()
    input.value = ""
    console.log(items);
}


function deleteTodo(index) {
    console.log('delete work', index);
    items.splice(index, 1)
    console.log(items);
    renderArray()
}

// function editTodo(index) {
//     let updatedValue = prompt("Update your todo:", items[index]);
//     if (updatedValue) {
//         items[index] = updatedValue;
//         renderArray();
//     }
// }

function editTodo(index) {
  ul.children[index].innerHTML = `
    <input type="text" id="editInput${index}" value="${items[index]}" />
    <button onclick="saveEdit(${index})">Save</button>
    <button onclick="renderArray()">Cancel</button>
  `;
}

function saveEdit(index) {
  let editInput = document.querySelector(`#editInput${index}`);
  items[index] = editInput.value;
  renderArray();
}
    