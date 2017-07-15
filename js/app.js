function createTodoItem(title) {

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';

    const label = document.createElement('label');
    label.innerText = title;
    label.className = title;

    const  editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.className = 'textfield';

    const editButton = document.createElement('button');
    editButton.innerText = 'Изменить';
    editButton.className = 'edit';

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Удалить';
    deleteButton.className = 'delete';

    const listItem = document.createElement('li');
    listItem.className = 'todo-item';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem;
}

function bindEvents(todoItem) {
    // доступ к checkbox и двум кнопкам
    const checkbox = todoItem.querySelector('.checkbox');
    const editButton = todoItem.querySelector('button.edit');
    const deleteButton = todoItem.querySelector('button.delete');
}

function addTodoItem(event) {
    event.preventDefault();

    if (addInput.value === '') return alert('Необходимо ввести название задачи.');

    const todoItem = createTodoItem(addInput.value);
    todoList.appendChild(todoItem);
    addInput.value = '';
}

const todoForm = document.getElementById('todo-form');
const addInput = document.getElementById('add-input');
const todoList = document.getElementById('todo-list');
const todoItems = document.querySelectorAll('.todo-item');

todoForm.addEventListener('submit', addTodoItem);
