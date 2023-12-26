function addTask() {
  //<input>
  var taskInput = document.getElementById("taskInput");
  var taskValue = taskInput.value;

  //check if the input is not empty
  if (taskValue.trim() === "") {
    alert("Please enter a task.");
    return;
  }

  //set the input field to nothing
  taskInput.value = "";

  //create a new list item
  var listItem = document.createElement("li");

  // create a checkbox
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      this.parentNode.remove();
    }
  });
  // create a label for the task
  var label = document.createElement("label");
  label.textContent = taskValue;

  //Add the checkbox and label to the list item
  listItem.appendChild(checkbox);
  listItem.appendChild(label);

  //Add the list item to the task list
  document.getElementById("taskList").appendChild(listItem);
}
