function solve(arr)  {
    let finished = [];
    for(el of arr) {
     if(el>=0) {
         finished.push(el);
     } else
         finished.unshift(el);
    }
    console.log(finished);
 }
 
solve([7, -2, 8, 9])