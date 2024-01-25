function solve(n, task1, task2, task3, task4, task5) {
    let arr = [task1, task2, task3, task4, task5];
    for(el of arr) {
        if (el == "chop") {
            n = n/2;
        }  else if( el == "dice") {
            n = Math.sqrt(n);
        } else if( el == "spice") {
            n+=1;
        }   else if( el == "bake") {
            n = n*3;
        }   else if( el == "fillet") {
                n =n* 0.8;
    }
    console.log(n);
}
         
}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')