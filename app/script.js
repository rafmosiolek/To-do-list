



// variable stores the add button reference:
var addButton = document.getElementById("add");
// event listener for the add buton
addButton.addEventListener("click", function() {
     var value = document.getElementById("item").value;
     // if there is any text inside the item field, add that text to the to-do list
     if (value) {
        // add text to the to-do list
     }
});

// adds a new item to the to do list
function addTask(text) {
    var list = document.getElementById("to-do");

    // create the li element with new task
    var item = document.createElement("li");
    item.innerText = text;

    // create div.buttons
    var buttons = document.createElement("div");
    buttons.classList.add("buttons");

    // create remove button
    var remove = document.createElement("button");
    remove.classList.add("remove");
    remove.innerHTML = "<i class='fa fa-trash-o fa-lg' aria-hidden='true'></i>";
    // add eventlistener for removing the task
    remove.addEventListener("click", removeTask);

    // create complete button
    var complete = document.createElement("button");
    complete.classList.add("complete");
    complete.innerHTML = "<i class='fa fa-check-circle-o fa-lg' aria-hidden='true'></i>";
    // add eventlistener for completing the task
    complete.addEventListener("click", completeTask);

    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);

    list.insertBefore(item, list.childNodes[0]);
}


function removeTask() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
 
    parent.removeChild(item);
}

function completeTask() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;
 
    // Check if the item should be added to the completed list or to re-added to the todo list
    var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');
 
    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
}



 





// global scope variables
// var addButton = document.getElementById('add-task');

// var textBox = document.getElementById('input-task');


// // event listeners
// addButton.addEventListener("click", addTask());


// function addTask() {
//     var list = document.getElementById('tasks');
//     var listElement = document.createElement('li');
//     // var deleteLink = document.createElement('a');
//     // append item to list
//     list.appendChild(listElement);
//     listElement.innerText = textBox.value;

  
//     // reset input box
//     textBox.value = "";
// }

// function enterKey(event) {
//     if (event.keyCode === 13 || event.which === 13) {
//         return addTask();
//     }
// }

// function emptyInput() {
//     if (textBox.value === "") {
//         return errorMsg();
//     }
// }

// function errorMsg() {
//     var errorBox = document.getElementById('error');
//     errorBox.style.display = "block";
// }



