const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

addButton.addEventListener('click', addTodo);

// todoInput.addEventListener('keypress', function(e) {
//     if(e.key === 'Enter') {
//         addTodo();
//     }
// })

// function addTodo() {
//     const todoText = todoInput.value.trim();
//     if(todoText !== '') {
//         const listItem = document.createElement('li');
//         listItem.textContent = todoText;
//         todoList.appendChild(listItem);
//         todoInput.value = '';
//     }
// }

function addTodo() { 
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = todoText;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(listItem);
        });
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
        todoInput.value = '';
    }
}
