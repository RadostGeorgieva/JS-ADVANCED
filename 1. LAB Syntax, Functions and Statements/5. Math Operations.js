function mathOperations(n1, n2, str) {
    let result = 0;
    switch(str){
        case '+':  result = n1 + n2; break;
        case '-':  result = n1 - n2; break;
        case '*':  result = n1 * n2; break;
        case '/':  result = n1 / n2; break;
        case '%':  result = n1 % n2; break;
        case '**':  result = n1 ** n2; break;
    }
    console.log(result);
}
mathOperations(3, 5.5, '*')