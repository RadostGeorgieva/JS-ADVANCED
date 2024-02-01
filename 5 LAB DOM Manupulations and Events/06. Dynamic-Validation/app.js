function validate() {
    let email = document.getElementById("email");
    email.addEventListener("change", handler);
debugger
    function handler(event) {
        let val = event.target.value;
        let regex = /[a-z]+@[a-z]+.[a-z]+/g;
        let m = val.match(regex);
        if(m) {
            event.currentTarget.classList.remove("error");
        } else {
            event.currentTarget.classList.add("error");
        }

    }
    
}