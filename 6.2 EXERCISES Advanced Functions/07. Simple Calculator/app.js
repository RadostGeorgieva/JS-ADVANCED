function calculator() {
    let n1;
    let n2;
    let result;
    
    function init(selector1, selector2, resultSelector) {
         n1= document.querySelector(selector1)
         n2 = document.querySelector(selector2);
         result = document.querySelector(resultSelector);
         console.log(n1,n2,result);
    }


    function add() {
        result.value = n1.value+n2.value;
        return result.value
       
    }
    function subtract() {
        result.value = n1.value-n2.value;
        return result.value
        
     }



     return calculate = {init, add, subtract};

    }



