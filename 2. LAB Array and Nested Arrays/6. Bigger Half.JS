function solve(arr)  {
    arr.sort((a,b) => a-b);
  
     return arr.slice(arr.length/2, arr.length);
  }

  solve([4, 7, 2, 5])