var popup = document.getElementById('popup');

const nameInput = document.getElementById('nameInput').value;
const taskInput = document.getElementById('taskInput').value;
const taskContainer = document.getElementById('tasks-id');

const addTask = () => {

    const nameInput = document.getElementById('nameInput').value;
    const taskInput = document.getElementById('taskInput').value;
    
    if(nameInput === '' || taskInput === '') {
        alert('Please fill in all fields');
        return;
    }else{

        var taskDiv = document.createElement('div');
        taskDiv.className = 'task-1';

        var taskInfoContainer = document.createElement('div');
        taskInfoContainer.className = 'task-info-container';

        var h1Name = document.createElement('h1');
        h1Name.className = 'h1-name';
        h1Name.textContent = nameInput;
        taskInfoContainer.appendChild(h1Name);

        var h1Task = document.createElement('h1');
        h1Task.className = 'h1-task';
        h1Task.textContent = taskInput;
        taskInfoContainer.appendChild(h1Task);

        var h1Date = document.createElement('h1');
        h1Date.textContent = new Date().toLocaleDateString();
        taskInfoContainer.appendChild(h1Date);

        var taskButtonsContainer = document.createElement('div');
        taskButtonsContainer.className = 'task-buttons-container';

        var editDiv = document.createElement('div');
        editDiv.className = 'edit';
        taskButtonsContainer.appendChild(editDiv);

        var deleteDiv = document.createElement('div');
        deleteDiv.className = 'delete';
        taskButtonsContainer.appendChild(deleteDiv);

        // Append new task div to container
        var taskContainer = document.getElementById('tasks-id');
        taskContainer.appendChild(taskDiv);

        taskDiv.appendChild(taskInfoContainer);
        taskDiv.appendChild(taskButtonsContainer);

        closePopup();
    }
}




// Function to open the popup
function openPopup() {
popup.style.display = 'flex';
popup.style.justifyContent = 'center';
popup.style.alignItems = 'center';
}

// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = 'none';
        closePopup();
    }
}

function closePopup() {
    popup.style.display = 'none';
    document.getElementById('nameInput').value = '';
    document.getElementById('taskInput').value = '';
}
