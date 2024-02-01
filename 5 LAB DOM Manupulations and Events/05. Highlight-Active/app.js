function focused() {
    let divs = document.querySelector("body div");
    let restOfDivs = divs.childNodes
    debugger
    for (let div of restOfDivs) {
    div.addEventListener("focus", (event) => {
        event.currentTarget.classList.add("focused");
    }, true);
    div.addEventListener("blur", (event) => {
        event.currentTarget.classList.remove("focused");
    }, true);

       
    }
}