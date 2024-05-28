document.getElementById('fetchTodos').addEventListener('click', fetchTodos);

function fetchTodos() {
    const todoCount = document.getElementById('todoCount').value;
    
    if (!todoCount) {
        alert('Введіть кількість задач');
        return;
    }

    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${todoCount}`)
        .then(response => response.json())
        .then(todos => displayTodos(todos))
        .catch(error => console.error('Error fetching todos:', error));
}

function displayTodos(todos) {
    const todosContainer = document.getElementById('todosContainer');
    todosContainer.innerHTML = '';

    todos.forEach(todo => {
        const todoCard = document.createElement('div');
        todoCard.className = 'todo-card';
        if (todo.completed) {
            todoCard.classList.add('todo-completed');
        }
        todoCard.innerHTML = `
            <span>${todo.title}</span>
        `;
        todosContainer.appendChild(todoCard);
    });
}
