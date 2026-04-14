function addLead() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please enter all fields");
        return;
    }

    let list = document.getElementById("leadList");

    let li = document.createElement("li");
    li.textContent = name + " - " + email;

    list.appendChild(li);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
}
