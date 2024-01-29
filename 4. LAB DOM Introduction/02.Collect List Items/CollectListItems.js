function extractText() {
    const elements = document.querySelectorAll("ul#items li");
    let textArea = document.querySelector("#result");

    for (el of elements){
        textArea.value+=el.textContent +"\n";
    }
}