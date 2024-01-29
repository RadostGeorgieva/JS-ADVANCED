function colorize() {
    let itemNodes = document.querySelectorAll("table tr");
    for(let i = 1; i < itemNodes.length; i+=2) {
        itemNodes[i].style.background = "teal";
    }
}