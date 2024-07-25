const form = document.querySelector<HTMLFormElement>(".form");
const formInput = document.querySelector<HTMLInputElement>(".form-input");
const taskList = document.querySelector<HTMLUListElement>(".list");

type Task = {
  description: string;
  isCompleted: boolean;
};

const tasks: Task[] = getLocalTask();

function getLocalTask(): Task[] {
  const getTask = localStorage.getItem("tasks");

  return getTask ? JSON.parse(getTask) : [];
}

tasks.forEach(renderTask);

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const description = formInput?.value;

  if (!description) {
    alert("Please provide a task.");
    return;
  }
  // add task to list
  const task: Task = { description, isCompleted: false };
  tasks.push(task);
  // render task
  renderTask(task);
  // save to local storage
  saveToLocal();

  formInput.value = "";
});

function renderTask(task: Task): void {
  const taskElement = document.createElement("li");
  taskElement.textContent = task.description;

  const taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";
  taskCheckbox.checked = task.isCompleted;

  taskCheckbox.addEventListener("change", () => {
    task.isCompleted = !task.isCompleted;
    saveToLocal();
  });

  taskElement.append(taskCheckbox);
  taskList?.appendChild(taskElement);
}

function saveToLocal(): void {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
// const mapTasks = tasks.map((task) => {
//   const { description, isCompleted } = task;

//   return `<list>
//     <p>${description}</p>
//     <input type="checkbox" checked=${isCompleted}>
//   </list>`;
// });
