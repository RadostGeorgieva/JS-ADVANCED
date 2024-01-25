function solve(arr)  {
    let first = 0;
    let second = 0
    for(let row = 0; row < arr.length; row++) {
        for(let col = 0; col < arr.length; col++) {
            if(row==col){
       first+=arr[row][col];
            }
    }
}
    for(let row = arr.length-1; row >= 0; row--) {
        for(let col = arr.length-1; col >= 0; col--) {
            if(row+col==arr.length-1){
       second+=arr[row][col];
            }
    }
 
}
return `${first} ${second}`
}
solve([[20, 40], [10, 60]])