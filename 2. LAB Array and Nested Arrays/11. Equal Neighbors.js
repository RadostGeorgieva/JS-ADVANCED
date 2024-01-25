function solve(arr) {
    let pair = 0;
  
    for (let row = 0; row < arr.length; row++) {
      for (let col = 0; col < arr[row].length; col++) {
        // Check for pairs horizontally
        if (col < arr[row].length - 1 && arr[row][col] === arr[row][col + 1]) {
          pair++;
        }
  
        // Check for pairs vertically
        if (row < arr.length - 1 && arr[row][col] === arr[row + 1][col]) {
          pair++;
        }
      }
    }
  
    return pair;
  }
  solve([['2', '3', '4', '7', '0'],

  ['4', '0', '5', '3', '4'],
  
  ['2', '3', '5', '4', '2'],
  
  ['9', '8', '7', '5', '4']])