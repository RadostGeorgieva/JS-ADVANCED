function solve(arr) {
    let newArr = []
    for(let i = 0; i <arr.length; i++) {
        if(arr[i] == "add")
        newArr.push(i+1);
        else if(arr[i] == "remove") {
            newArr.pop();
        }
    }
    if(newArr.length<1) {
        console.log("Empty");
    } 
    for(el of newArr) {
        console.log(el);
    }
}