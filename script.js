function addLead() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please enter all fields");
        return;
    }

    let list = document.getElementById("leadList");

    let li = document.createElement("li");

    li.innerHTML = `
        ${name} - ${email}
        <br>
        Status: <select onchange="updateStatus(this)">
            <option>New</option>
            <option>Contacted</option>
            <option>Converted</option>
        </select>
        <br>
        <button onclick="deleteLead(this)">Delete</button>
    `;

    list.appendChild(li);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
}

function deleteLead(button) {
    button.parentElement.remove();
}

function updateStatus(select) {
    alert("Status updated to: " + select.value);
}
