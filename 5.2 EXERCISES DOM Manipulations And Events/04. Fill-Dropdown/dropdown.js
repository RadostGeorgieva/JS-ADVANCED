function addItem() {
    let entireArticle = document.getElementsByTagName("article");
    console.log(entireArticle);
    let text = document.querySelector("input[id='newItemText']");
    let val =  document.querySelector("input[id='newItemValue']");
    let selectOption = document.getElementById("menu");

    let newOption = document.createElement("option");
    newOption.textContent = text.value;
    newOption.value = val.value;
    debugger
    selectOption.appendChild(newOption);

    text.value = "";
    val.value = "";
    
}