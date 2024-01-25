function solve(arrStr)  {
    let arr = []
    let inDiagonal = false;
    for(el of arrStr) {
        let  numbers = el.split(" ").map(x => parseInt(x, 10))
        arr.push(numbers)
    }
    let first = 0;
    let second = 0
    for(let row = 0; row < arr.length; row++) {
        for(let col = 0; col < arr.length; col++) {
            inDiagonal = false;
            if(row==col){
       first+=Number(arr[row][col]);
       inDiagonal = true;
            }
            if(row+col==arr.length-1){
                second+=Number(arr[row][col]);
                inDiagonal = true;
            }
            if(!inDiagonal){
            arr[row][col] = "x"
            }
            
    }
}
 if(first == second) {
  arr = arr.map(row => row.map(el => { 
        
        if(el == "x") {

     return el = first
        } 
        return el;
    }
    )
    )
    for(el of arr) {
        console.log(el.join(" "));

 }

} else  {
    for(el of arrStr) {
        console.log(el);

}

}
}