document.addEventListener("DOMContentLoaded", function() {
    const enterButton = document.getElementById("enterButton");
    const inputField = document.getElementById("inputField");
    const table = document.getElementById("table");
    const tableData = [];

    enterButton.addEventListener("click", function() {
        const value = inputField.value.trim();
        if (value !== "") {
            if (tableData.includes(value)) {
                alert('Such meaning already exists!');
            } else {
                tableData.push(value);
                updateTable();
            }
            inputField.value = "";  
        } else {
            alert('Enter the meaning!');
        }
    });

    function updateTable() {
        table.innerHTML = '';
        tableData.forEach(function(value) {
            var row = table.insertRow();
            var cell = row.insertCell();
            cell.textContent = value;
        });
    }
});

const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function() {
    alert("Data sent!");
});



