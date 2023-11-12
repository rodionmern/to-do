// document.getElementById("username").innerHTML = username;

const add_Task = () => {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value;
  
    if (!task) return;
  
    const taskList = document.getElementById("taskList");
  
    const newTask = document.createElement("div");
    newTask.classList.add("task");
  
    const taskText = document.createElement("div");
    taskText.classList.add("task-text");
    taskText.innerHTML = task;
  
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Завершить задачу";
    deleteButton.onclick = () => {
      taskList.removeChild(newTask);
    };
  
    newTask.appendChild(taskText);
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);
  
    taskInput.value = "Введите свою задачу";

    
  };