function sum(arr) {

    let sum = 0;
    
    for (let num of arr){
    
    sum += Number(num);
    
    }
    
    return sum;
    
    }
    sum(["str",1])
    export{ sum };
