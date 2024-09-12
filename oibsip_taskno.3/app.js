document.getElementById('add-task-btn').addEventListener('click', function() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText !== "") {
        const todoList = document.getElementById('todo-list');

        const li = document.createElement('li');
        li.textContent = todoText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';

        li.appendChild(deleteBtn);
        todoList.appendChild(li);

        todoInput.value = '';

        deleteBtn.addEventListener('click', function() {
            todoList.removeChild(li);
        });
    }
});
