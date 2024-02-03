function lockedProfile() {

    let buttons = Array.from(document.querySelectorAll("button"));


    for (let pr of buttons) {
        pr.addEventListener("click", function (event) {
            handler(event);
        });
    }


    function handler(event) {
        let hiddenData = event.target.parentElement.querySelector("div");
        let btn = event.target.parentElement.querySelector("input[type='radio']:checked");

        if (btn.value == "unlock") {
            if (event.target.textContent == "Show more") {
                hiddenData.style.display = "block";
                event.target.textContent = "Hide it";
            }
            else {
                hiddenData.style.display = "none";
                event.target.textContent = "Show more";
                  
            }
        }

    }
}
