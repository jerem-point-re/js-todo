const form = document.querySelector("form");
const container = document.querySelector(".container");
const taskInput = document.querySelector("#taskInput");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  //   Méthode 1
  //   container.innerHTML += `
  //     <div class="task">
  //       <p>Lorem, ipsum dolor</p>
  //       <button>delete</button>
  //     </div>`;

  // Méthode 2
  const task = document.createElement("div");
  task.classList.add("task");
  const p = document.createElement("p");
  const button = document.createElement("button");
  button.innerText = "delete";

  task.appendChild(p);
  p.innerText = taskInput.value;
  task.appendChild(button);
  container.appendChild(task);
});

// TODO : clear input after submit ✅

form.addEventListener('submit', function (e) {
  e.preventDefault();
  taskInput.value = '';
  saveData();
});

// TODO : delete task individually ✅

container.addEventListener('click', function (e) {
  if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();
    saveData();
  }
});

// TODO : add task to cache (local storage) : persist data ✅

function saveData() {
  localStorage.setItem('data', container.innerHTML);
}

function showTasks() {
  container.innerHTML = localStorage.getItem('data');
}

showTasks();
