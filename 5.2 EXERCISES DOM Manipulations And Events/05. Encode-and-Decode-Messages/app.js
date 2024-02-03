function encodeAndDecodeMessages() {
    let textAreas = Array.from(document.querySelectorAll("textArea"));
    let encodeButton = textAreas[0].parentElement.querySelector("button");
    encodeButton.addEventListener("click", function (element) {
        code(element, textAreas);
    });

    let decodeButton = textAreas[1].parentElement.querySelector("button");
    decodeButton.addEventListener("click", function (element) {
        decode(element, textAreas);
    });

    function code(element, textAreas) {
        let arr = textAreas[0].value.split("");
        let newMessage = [];
        for (el of arr) {
            let currentChar = el.charCodeAt() + 1;
            newMessage.push(String.fromCharCode(currentChar)) 
        }
        textAreas[0].value = "";
        textAreas[1].value = newMessage.join("");

    }

    function decode(element, textAreas) {
        if(textAreas[1].value != ""){
        let arr = textAreas[1].value.split("");
        let oldMessage = [];
        for (el of arr) {
            let currentChar = el.charCodeAt() - 1;
            oldMessage.push(String.fromCharCode(currentChar)) 
        }
        textAreas[1].value = oldMessage.join("");
        textAreas[0].value = "";
    }

    }


}