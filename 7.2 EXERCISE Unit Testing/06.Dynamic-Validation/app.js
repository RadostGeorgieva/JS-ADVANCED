function validate() {
    let inputEmail = document.querySelector("input");
    inputEmail.addEventListener("change", onchange);

    function onchange(event) {
        let rgx = /[a-z]+@[a-z]+.[a-z]+/;
        let email = inputEmail.value;
        console.log(rgx.test(email));
        if (rgx.test(email)) {
            console.log("Invalid");
            inputEmail.classList.remove("error");
        } else {
            inputEmail.classList.add("error");
            console.log("Valid");
        }
    }


}