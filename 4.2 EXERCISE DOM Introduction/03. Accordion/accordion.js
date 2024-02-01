function toggle() {
    const element = document.getElementById("extra");
    if (element.style.display == "none") {
        element.style.display = "block"
        document.getElementsByClassName("button")[0].innerHTML = "Less"
    }
    else {
        element.style.display = "none"
        document.getElementsByClassName("button")[0].innerHTML = "More"
    }

}
