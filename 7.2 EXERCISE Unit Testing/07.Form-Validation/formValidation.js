function validate() {
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let passwordConfirmation = document.getElementById("confirm-password");
    let checkbox = document.getElementById("company");
    let companyData = document.getElementById("companyInfo");
    let company = false;
    let number = document.getElementById("companyNumber");
    let btn = document.getElementById("submit");
    checkbox.addEventListener("change", handler)
    btn.addEventListener("click", handlerBtn);

    function handler(e) {
        if (companyData.style.display == "block") {
            companyData.style.display = "none";
            company = false;
            return;
        }
        companyData.style.display = "block";
        company = true;
        return;
    }
    function handlerBtn(e) {
        e.preventDefault();
        let allTrue = true;
        if (checkUsername(username) == false) {
            username.style.borderColor = "red";
            allTrue = false;
        } else {
            username.style.borderColor = "none";
        }

        if (checkPaswords(password, passwordConfirmation) == false) {
            password.style.borderColor = "red";
            passwordConfirmation.style.borderColor = "red";
            allTrue = false;
        } else {
            password.style.borderColor = "none";
            passwordConfirmation.style.borderColor = "none";

        }
        if (checkEmail(email) == false) {
            email.style.borderColor = "red";
            allTrue = false;
        } else {
            email.style.borderColor = "none";
        }
        if (company == true) {
            if (checkCompany(number) == false) {
                number.style.borderColor = "red";
                allTrue = false;

            } else {
                number.style.borderColor = "none";
            }
        }
        else {
            let companyInfo = document.getElementById("companyInfo");
            companyInfo.style.display = "none";

        }
        if (allTrue) {
            let div = document.getElementById("valid");
            div.style.display = "block";
        }
        else {
            let div = document.getElementById("valid");
            div.style.display = "none";
        }

    }
    function checkUsername(username) {
        let regex = /^[A-Za-z0-9]{3,20}$/;
        return regex.test(username.value)
    }
    function checkPaswords(password, passwordConfirmation) {
        let regex = /[\w]{5,15}/;
        return (regex.test(password.value) && (password.value == passwordConfirmation.value));
    }
    function checkEmail(email) {
        let regex = /^[^@.]+@[^@]*\.[^@]*$/;;
        return regex.test(email.value);
    }
    function checkCompany(number) {
        if (Number(number.value) >= 1000 && Number(number.value <= 9999)) {
            return true;
        }
        return false;
    }

}