function solve(arr) {
    let biggest = arr[0];
    for(let i = 1; i <arr.length; i++) {
       if(arr[i]<biggest) {
        arr.splice(i,1);
        i--;
       } else {
        biggest = arr[i]
       }
    
}
return arr;
}