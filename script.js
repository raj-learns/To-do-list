document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date');
    const taskList = document.getElementById('task-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskInput.value, dueDateInput.value);
        taskInput.value = '';
        dueDateInput.value = '';
    });

    function addTask(task, dueDate) {
        const li = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = `${task} - Due: ${dueDate}`;

        const completeIcon = document.createElement('span');
        completeIcon.innerHTML = '✔️';
        completeIcon.classList.add('icon');
        completeIcon.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        const deleteIcon = document.createElement('span');
        deleteIcon.innerHTML = '❌';
        deleteIcon.classList.add('icon');
        deleteIcon.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(taskSpan);
        li.appendChild(completeIcon);
        li.appendChild(deleteIcon);

        taskList.appendChild(li);
    }
});
