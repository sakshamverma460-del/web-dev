document.getElementById("addBtn").addEventListener("click", function () {

    let task = document.getElementById("inputBox").value;

    if (task === "") {
        alert("Enter task!");
        return;
    }

    let li = document.createElement("li");
    li.innerText = task;

    document.getElementById("list").appendChild(li);

    document.getElementById("inputBox").value = "";

});