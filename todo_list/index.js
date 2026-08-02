
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");


addButton.addEventListener("click", function () {


    const taskText = taskInput.value.trim();


    if (taskText === "") {
        alert("Please enter a task!");
        return; // Exit the function early if input is empty
    }

    // 1. Create a parent div for the task item
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    // 2. Create a span tag to hold the task text
    const taskName = document.createElement("span");
    taskName.className = "taskName";
    taskName.textContent = taskText;

    // 3. Create a container div for the action buttons
    const actionsDiv = document.createElement("div");
    actionsDiv.className = "actions";

    // 4. Create the "DONE" button
    const doneButton = document.createElement("button");
    doneButton.className = "doneButton";
    doneButton.textContent = "Done";

    // 5. Create the "DELETE" button
    const deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton";
    deleteButton.textContent = "Delete";

    // STEP 4: Add click functionality to DONE & DELETE buttons

    doneButton.addEventListener("click", function () {
        taskName.classList.toggle("completed");
    });


    deleteButton.addEventListener("click", function () {
        taskDiv.remove();
    });



    // STEP 5: Assemble elements together and display on page

    // Put Done and Delete buttons inside the actions div
    actionsDiv.appendChild(doneButton);
    actionsDiv.appendChild(deleteButton);

    // Put taskName and actionsDiv inside the main taskDiv
    taskDiv.appendChild(taskName);
    taskDiv.appendChild(actionsDiv);

    // Add the complete taskDiv into the taskList on the page
    taskList.appendChild(taskDiv);

    // STEP 6: Clear the input box so user can type the next task
    taskInput.value = "";
});

// OPTIONAL: Allow pressing "Enter" key on keyboard to add task
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addButton.click(); // Trigger the click event of addButton
    }
});