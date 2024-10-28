// Function to handle form submission
document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const currentDate = new Date().toLocaleString();

    if (title && description) {
        const taskList = document.getElementById('pending-task-list');
        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>${title}</td>
            <td>${description}</td>
            <td>${currentDate}</td>
            <td>
                <button class="complete-btn">Complete</button>
                <button class="delete-btn">Delete</button>
            </td>
        `;

        taskList.appendChild(newRow);

        // Clear form
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';

        // Add functionality for marking as complete
        newRow.querySelector('.complete-btn').addEventListener('click', function() {
            moveToCompleted(newRow, title, description);
        });

        // Add delete functionality
        newRow.querySelector('.delete-btn').addEventListener('click', function() {
            newRow.remove();
        });
    }
});

// Function to move tasks to the completed section
function moveToCompleted(taskRow, title, description) {
    const completedList = document.getElementById('completed-task-list');
    const completionDate = new Date().toLocaleString();

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td class="complete">${title}</td>
        <td class="complete">${description}</td>
        <td class="complete">${completionDate}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    completedList.appendChild(newRow);
    taskRow.remove();

    // Add delete functionality for completed tasks
    newRow.querySelector('.delete-btn').addEventListener('click', function() {
        newRow.remove();
    });
}
