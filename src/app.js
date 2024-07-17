addButton = document.getElementById("add-task-button");

function addTask(){
	var task = document.createElement("div");
	var taskText = document.querySelector("input").value;
	task.className = "task";
	task.innerHTML = `<p>${taskText}</p><button onclick="removeTask(this)">Remove a task</button`;
	document.getElementById("tasks").append(task);
}

function removeTask(button){
	button.parentElement.remove();
}

addButton.addEventListener("click", addTask)
