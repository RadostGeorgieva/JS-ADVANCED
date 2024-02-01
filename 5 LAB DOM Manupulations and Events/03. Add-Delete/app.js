function addItem() {
    let newText = document.getElementById("newItemText").value;
    debugger
    let ulToPutDataIn = document.getElementById("items");
    let li = document.createElement("li");
    li.textContent = newText;
    if (newText.length > 0) {
        ulToPutDataIn.appendChild(li);
        document.getElementById("newItemText").value = "";

        let deleteItem = document.createElement("a");
        li.appendChild(deleteItem);
        deleteItem.href = "#";
        deleteItem.textContent = "[Delete]";
        deleteItem.addEventListener('click', handler);
    }

    function handler (event) {
      li.remove()
       

    }
    
}