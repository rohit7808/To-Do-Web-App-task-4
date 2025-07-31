let tasks = [];

function addTask() {
  const taskText = document.getElementById("taskInput").value;
  const taskTime = document.getElementById("taskTime").value;

  if (taskText.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  const task = {
    text: taskText,
    time: taskTime,
    completed: false
  };

  tasks.push(task);
  document.getElementById("taskInput").value = "";
  document.getElementById("taskTime").value = "";
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const info = document.createElement("div");
    info.className = "task-info";
    info.innerHTML = `<strong>${task.text}</strong><br/><small>${task.time}</small>`;
    if (task.completed) {
      info.classList.add("completed");
    }

    const actions = document.createElement("div");
    actions.className = "actions";

    const completeBtn = document.createElement("button");
    completeBtn.textContent = task.completed ? "Undo" : "Complete";
    completeBtn.onclick = () => {
      task.completed = !task.completed;
      renderTasks();
    };

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => {
      const newText = prompt("Edit your task:", task.text);
      if (newText !== null) {
        task.text = newText;
        renderTasks();
      }
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => {
      tasks.splice(index, 1);
      renderTasks();
    };

    actions.appendChild(completeBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(info);
    li.appendChild(actions);
    list.appendChild(li);
  });
}
