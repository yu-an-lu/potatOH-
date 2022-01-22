var row = 1;

var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);


function displayDetails(){
    var productName = document.getElementById("Product").value;
    var expirDate = document.getElementById("Expiration Date").value;

    if(!productName || !expirDate){
        alert("Fill all boxes");
        return;
    }

    var display = document.getElementById("display");

    var newRow = display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    
    cell1.innerHTML = productName;
    cell2.innerHTML = expirDate;

    row++;

}