// Global scope variables

var errorBox = document.getElementById('error'); // error box displayed when user didn't enter a task
var tasker = document.getElementsByClassName('tasker'); // tasker header
var inputTask = document.getElementById('input-task'); // main input in a tasker header
var addBtn = document.getElementsByClassName('add-task'); // main add task button;

// var taskerBody = document.getElementsByClassName('tasker-body'); // takser body div
// var deleteBtn = document.getElementsByClassName('delete'); // delete task button
// var doneBtn = document.getElementsByClassName('done'); // mark task as done button

var tasks = document.getElementsByClassName('tasks'); // new tasks


function renderTask() {
    // build html
    var taskLi = document.createElement("li");
    taskLi.setAttribute("class", "tasker-body");

    // delete button
    var deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete");
    // trash icon
    var trashIcon = document.createElement("i");
    trashIcon.setAttribute("class", "fa fa-trash-o");
    trashIcon.setAttribute("aria-hidden", "true");
    deleteBtn.appendChild(trashIcon); // places a thrash icon inside a button

    // task done button
    var doneBtn = document.createElement("button");
    doneBtn.setAttribute("class", "done");
    // checked icon
    var checkedIcon = document.createElement("i");
    checkedIcon.setAttribute("class", "fa fa-check");
    checkedIcon.setAttribute("aria-hidden", "true");
    doneBtn.appendChild(checkedIcon); // places an checked icon inside a button

    // user task
    var taskVal = document.createTextNode(this.taskInput.value);

    taskLi.appendChild(deleteBtn);
    taskLi.appendChild(taskVal);
    taskLi.appendChild(doneBtn);

    this.tasklist.appendChild(taskLi);
}

addBtn.addEventListener("click", renderTask());
