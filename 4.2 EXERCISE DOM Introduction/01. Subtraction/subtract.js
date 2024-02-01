function subtract() {
    let n1 = document.getElementById("firstNumber").value;
    let n2 = document.getElementById("secondNumber").value;
    let result = Number(n1)-Number(n2);
    document.getElementById("result").textContent = result;

    console.log(result);
}