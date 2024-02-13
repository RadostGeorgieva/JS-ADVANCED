function validate() {
    document.getElementById("registerForm").addEventListener('submit', (event) => {
        event.preventDefault();
    });
 
    let companyInput = document.getElementById("company");
    companyInput.addEventListener('change', isCompanyInfo);
 
    let submitBtn = document.getElementById("submit");
    submitBtn.addEventListener("click", checkAllFields);
 
    function isCompanyInfo(e) {
        if(e.target.checked) {
            document.getElementById("companyInfo").style.display = "block";
        } else {
            document.getElementById("companyInfo").style.display = "none";
        }
    }
 
    function checkAllFields() {
        let usernameInput = document.getElementById("username");
        let emailInput = document.getElementById("email");
        let passwordInput = document.getElementById("password");
        let confirmPasswordInput = document.getElementById("confirm-password");
        let companyNumberInput = document.getElementById("companyNumber");
 
        let isValid = true;
        debugger;
 
        let usernamePattern = /^[a-zA-Z0-9]{3,20}$/g;
        if(usernamePattern.test(usernameInput.value)) {
            usernameInput.style.border = 'none';
        } else {
            usernameInput.style.borderColor = 'red';
            isValid = false;
        }
 
        let emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;
        if(emailPattern.test(emailInput.value)){
            emailInput.style.border = 'none';
        } else {
            emailInput.style.borderColor = 'red';
            isValid = false;
        }
 
        let passwordPattern = /^[\w]{5,15}$/;
        if (!passwordPattern.test(passwordInput.value)){
            passwordInput.style.borderColor = 'red';
            confirmPasswordInput.style.borderColor = 'red';
            isValid = false;
            
        } else {
            if(passwordInput.value === confirmPasswordInput.value) {
                passwordInput.style.border = 'none';
                confirmPasswordInput.style.border = 'none';
            } else {
                passwordInput.style.borderColor = 'red';
                confirmPasswordInput.style.borderColor = 'red';
                isValid = false;
            }
        }
       
        if(companyInput.checked) {
            let companyNumber = Number(companyNumberInput.value);
            if(companyNumber < 1000 || companyNumber > 9999){
                companyNumberInput.style.borderColor = 'red';
                isValid = false;
            } else {
                companyNumberInput.style.border = 'none';
            }
        }
 
        if (isValid) {
            document.getElementById("valid").style.display = 'block';
        } else {
            document.getElementById("valid").style.display = 'none';
        }
    }
}