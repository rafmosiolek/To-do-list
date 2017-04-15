// global scope variables
var addButton = document.getElementById('add-task');

// event listeners
addButton.addEventListener("click", addTask);


// assign event listener to all delete links
// function assignDeleteLinkEvent(){
//     var deleteLinks = document.getElementsByClassName('delete-link');

//     for (var i=0;i<deleteLinks.length;i++){
//         deleteLinks[i].addEventListener("click", removeItem);
//     }
// }


function addTask(){
    var textBox = document.getElementById('input-task');
    var list = document.getElementById('tasks');
    var listElement = document.createElement('li');
    // var deleteLink = document.createElement('a');
    // append item to list
    list.appendChild(listElement);
    listElement.innerText = textBox.value;
  
    // reset input box
    textBox.value = "";


};

function enterKey(event){
    if (event.keyCode === 13 || event.which === 13) {
        return addTask();
    }
}

function errorMsg() {
    var textBox = document.getElementById('input-task');
    var errorBox = document.getElementById('error');

    if(textBox.value = ""){
        errorBox.style.display("block");
    }

}





// removes the item
// function removeItem(){
//     var parent = this.parentNode.parentNode;
//     var child = this.parentNode

//     parent.removeChild(child);
// }

// function errorBox {
//     var textBox = document.getElementById('input-task');
//     var errorMsg = document.getElementById('error');

//     if (textBox.value === "") {
//         errorMsg.style.display = "block";
//     }
// }

// // Global scope variables


// // var taskerBody = document.getElementsByClassName('tasker-body'); // takser body div
// // var deleteBtn = document.getElementsByClassName('delete'); // delete task button
// // var doneBtn = document.getElementsByClassName('done'); // mark task as done button

// var taskInput = document.getElementById("input-task"); // main input in a tasker header
// var addBtn = document.getElementById("add-task"); // add task button
// var tasklist = document.getElementsByClassName("tasks") // tasks unordered list
// var taskListChildren = tasklist.children; // li elements
// var errorBox = document.getElementById("error") // error box displayed when user didn't enter a task


//         // },
//         // bindEvents: function() {
//         //     this.addBtn.onclick = this.addTask.bind(this);
//         //     this.taskInput.onkeypress = this.enterKey.bind(this);
//         // },

// function renderTask() {
//     // build html
//     var taskLi = document.createElement("li");
//     taskLi.setAttribute("class", "tasker-body");

//     // delete button
//     var deleteBtn = document.createElement("button");
//     deleteBtn.setAttribute("class", "delete");
//     // trash icon
//     var trashIcon = document.createElement("i");
//     trashIcon.setAttribute("class", "fa fa-trash-o");
//     trashIcon.setAttribute("aria-hidden", "true");
//     deleteBtn.appendChild(trashIcon); // places a thrash icon inside a button

//     // task done button
//     var doneBtn = document.createElement("button");
//     doneBtn.setAttribute("class", "done");
//     // checked icon
//     var checkedIcon = document.createElement("i");
//     checkedIcon.setAttribute("class", "fa fa-check");
//     checkedIcon.setAttribute("aria-hidden", "true");
//     doneBtn.appendChild(checkedIcon); // places a checked icon inside a button

//     // user task
//     var taskVal = document.createTextNode(taskInput.value);

//     taskLi.appendChild(deleteBtn);
//     taskLi.appendChild(taskVal);
//     taskLi.appendChild(doneBtn);

//     // tasklist.appendChild(taskLi);
// }

// function error () {
//    if (taskInput.value === ""){
//     errorBox.style.display = "block";
//     }   
// }




// function addTask() {
//     var value = taskInput.value;

//     return renderTask();
//     taskInput.value = "";

//     }


// addBtn.addEventListener("click", addTask());


// document.getElementById("add-task").onclick = function(){
//     var task = document.getElementById("input-task").value;

//     var node = document.createElement("Li");
//     var textnode = document.createTextNode(task);
//     node.appendChild(textnode)


//     document.getElementById("tasks").appendChild(node);
// }
