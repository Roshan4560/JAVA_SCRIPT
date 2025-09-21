document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const list = document.getElementById('todo-list');

    function addTodo() {
        const value = input.value.trim();
        if (!value) return;

        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <span class="todo-text">${value}</span>
            <button class="delete-btn">&times;</button>
        `;
        list.appendChild(li);
        input.value = '';

        li.querySelector('.todo-text').addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
        });
    }

    function addTodo() {
        const value = input.value.trim();
        if (!value) return;

        const now = new Date();
        const options = { 
            year: 'numeric', month: 'short', day: 'numeric', 
            hour: '2-digit', minute: '2-digit', second: '2-digit' 
        };
        const timestamp = now.toLocaleString(undefined, options);

        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <span class="todo-text">${value}</span>
            <span class="todo-timestamp" style="font-size:0.8em;color:#888;margin-left:10px;">${timestamp}</span>
            <button class="delete-btn">&times;</button>
        `;
        list.appendChild(li);
        input.value = '';

        li.querySelector('.todo-text').addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
        });
    }

    function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
    };
    const dateStr = now.toLocaleDateString(undefined, options);
    const timeStr = now.toLocaleTimeString();
    document.getElementById('datetime').textContent = `${dateStr} | ${timeStr}`;
    }
    setInterval(updateDateTime, 1000);
    updateDateTime();

    addBtn.addEventListener('click', addTodo);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') addTodo();
    });
});