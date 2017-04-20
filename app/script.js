



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



