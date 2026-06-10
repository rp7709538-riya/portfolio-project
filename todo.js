let tasks = [];

function addTask() {
    let input = document.getElementById("taskInput");

    if(input.value !== "") {
        tasks.push(input.value);

        let li = document.createElement("li");
        li.textContent = input.value;

        document.getElementById("taskList").appendChild(li);

        input.value = "";
    }
}