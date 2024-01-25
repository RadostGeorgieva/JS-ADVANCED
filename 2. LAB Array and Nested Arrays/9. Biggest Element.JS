function solve(arr)  {
    let biggest = arr[0][0];
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j <= arr.length; j++) {
       if(biggest<arr[i][j]) {
        biggest = arr[i][j];
       }
    }
 
}
return biggest;
}
solve([[20, 50, 10],

    [8, 33, 145]])