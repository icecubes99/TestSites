window.onload = () => {
  // Get tasks from localStorage
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Get task container
  let taskContainer = document.getElementById("tasks-id");

  // Create and append task elements
  tasks.forEach((task) => {
    let taskDiv = document.createElement("div");
    taskDiv.className = "task-1";

    let taskInfoContainer = document.createElement("div");
    taskInfoContainer.className = "task-info-container";

    let h1Name = document.createElement("h1");
    h1Name.className = "h1-name";
    h1Name.textContent = task.name;
    taskInfoContainer.appendChild(h1Name);

    let h1Task = document.createElement("h1");
    h1Task.classNamelet = "h1-task";
    h1Task.textContent = task.task;
    taskInfoContainer.appendChild(h1Task);

    let h1Date = document.createElement("h1");
    h1Date.textContent = task.date;
    taskInfoContainer.appendChild(h1Date);

    let taskButtonsContainer = document.createElement("div");
    taskButtonsContainer.className = "task-buttons-container";

    let editDiv = document.createElement("div");
    editDiv.className = "edit";
    taskButtonsContainer.appendChild(editDiv);

    let deleteDiv = document.createElement("div");
    deleteDiv.className = "delete";
    deleteDiv.addEventListener("click", function () {
      taskDiv.remove();
    });
    taskButtonsContainer.appendChild(deleteDiv);

    taskDiv.appendChild(taskInfoContainer);
    taskDiv.appendChild(taskButtonsContainer);

    taskContainer.appendChild(taskDiv);

    editDiv.addEventListener("click", function () {
      openEditPopup(task);
    });

    deleteDiv.className = "delete";
    deleteDiv.addEventListener("click", function () {
      // Remove task div from DOM
      taskDiv.remove();

      // Remove task from localStorage
      let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      let updatedTasks = tasks.filter(
        (t) => t.name !== task.name && t.task !== task.task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    });
    taskButtonsContainer.appendChild(deleteDiv);
  });
};

var popup = document.getElementById("popup");

const nameInput = document.getElementById("nameInput").value;
const taskInput = document.getElementById("taskInput").value;
const taskContainer = document.getElementById("tasks-id");

const addTask = () => {
  const nameInput = document.getElementById("nameInput").value;
  const taskInput = document.getElementById("taskInput").value;

  if (nameInput === "" || taskInput === "") {
    alert("Please fill in all fields");
    return;
  } else {
    let task = {
      name: nameInput,
      task: taskInput,
      date: new Date().toLocaleDateString(),
    };

    // Save task to localStorage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    let taskDiv = document.createElement("div");
    taskDiv.className = "task-1";

    let taskInfoContainer = document.createElement("div");
    taskInfoContainer.className = "task-info-container";

    let h1Name = document.createElement("h1");
    h1Name.className = "h1-name";
    h1Name.textContent = nameInput;
    taskInfoContainer.appendChild(h1Name);

    let h1Task = document.createElement("h1");
    h1Task.classNamelet = "h1-task";
    h1Task.textContent = taskInput;
    taskInfoContainer.appendChild(h1Task);

    let h1Date = document.createElement("h1");
    h1Date.textContent = new Date().toLocaleDateString();
    taskInfoContainer.appendChild(h1Date);

    let taskButtonsContainer = document.createElement("div");
    taskButtonsContainer.className = "task-buttons-container";

    let editDiv = document.createElement("div");
    editDiv.className = "edit";
    taskButtonsContainer.appendChild(editDiv);

    let deleteDiv = document.createElement("div");
    deleteDiv.className = "delete";
    taskButtonsContainer.appendChild(deleteDiv);

    // Append new task div to container
    let taskContainer = document.getElementById("tasks-id");
    taskContainer.appendChild(taskDiv);

    taskDiv.appendChild(taskInfoContainer);
    taskDiv.appendChild(taskButtonsContainer);

    closePopup();

    // Inside the addTask function
    // editDiv = document.createElement("div");
    editDiv.className = "edit";
    editDiv.addEventListener("click", function () {
      openEditPopup(task);
    });
    taskButtonsContainer.appendChild(editDiv);

    deleteDiv.className = "delete";
    deleteDiv.addEventListener("click", function () {
      // Remove task div from DOM
      taskDiv.remove();

      // Remove task from localStorage
      let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      let updatedTasks = tasks.filter(
        (t) => t.name !== task.name && t.task !== task.task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    });
    taskButtonsContainer.appendChild(deleteDiv);
  }
};

// Function to open the popup
function openPopup() {
  popup.style.display = "flex";
  popup.style.justifyContent = "center";
  popup.style.alignItems = "center";
}

// When the user clicks anywhere outside of the popup, close it
window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
    closePopup();
  }
};

function closePopup() {
  popup.style.display = "none";
  document.getElementById("nameInput").value = "";
  document.getElementById("taskInput").value = "";
}

function openEditPopup(task) {
  // Open the popup
  openPopup();

  // Fill the input fields with the current task data
  document.getElementById("nameInput").value = task.name;
  document.getElementById("taskInput").value = task.task;

  // Change the addTask function to updateTask
  document.getElementById("popup-submit-button").onclick = function () {
    updateTask(task);
  };
}
function updateTask(oldTask) {
  // Get the updated task data from the input fields
  let updatedTask = {
    name: document.getElementById("nameInput").value,
    task: document.getElementById("taskInput").value,
    date: new Date().toLocaleDateString(),
  };
  closePopup();

  // Get the current tasks from localStorage
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Replace the old task with the updated task
  let updatedTasks = tasks.map((task) =>
    task.name === oldTask.name && task.task === oldTask.task
      ? updatedTask
      : task
  );

  // Save the updated tasks to localStorage
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));

  // Refresh the page to show the updated tasks
  location.reload();
}
