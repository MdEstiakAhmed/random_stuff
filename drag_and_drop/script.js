const todoList = document.getElementsByClassName('todo');
const statusContainerList = document.getElementsByClassName('taskStatusContainer');
let draggableTodo = null;

for (let index = 0; index < todoList.length; index++) {
    todoList[index].addEventListener("dragstart", handleDragStart);
    todoList[index].addEventListener("dragend", handleDragEnd);
}

for (let index = 0; index < statusContainerList.length; index++) {
    statusContainerList[index].addEventListener("dragover", handleDragOver);
    statusContainerList[index].addEventListener("dragenter", handleDragEnter);
    statusContainerList[index].addEventListener("dragleave", handleDragLeave);
    statusContainerList[index].addEventListener("drop", handleDrop);
}

function handleDragStart() {
    draggableTodo = this;
    console.log("drag start");
}

function handleDragEnd() {
    draggableTodo = null;
    console.log("drag end");
}

function handleDragOver(e) {
    e.preventDefault();
}

function handleDragEnter() {
    this.style.border = '1px solid gray';
    console.log("drag enter");
}

function handleDragLeave() {
    this.style.border = 'none';
    console.log("drag leave");
}

function handleDrop() {
    this.style.border = 'none';
    this.appendChild(draggableTodo);
    console.log("drop");
}