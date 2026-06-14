function renderTasks() {

    let list = document.getElementById("list");

    list.innerHTML = "";

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function(task) {

        let li = document.createElement("li");

        li.innerText = task;

        list.appendChild(li);

    });

}

document.getElementById("addBtn").addEventListener("click", function () {

    let task = document.getElementById("inputBox").value;

    if (task === "") {
        alert("Enter task!");
        return;
    }

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    document.getElementById("inputBox").value = "";

    renderTasks();

});

window.onload = function () {

    renderTasks();

};