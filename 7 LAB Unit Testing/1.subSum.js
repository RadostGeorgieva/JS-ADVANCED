function solve( array, startIndex, endIndex) {
if(!Array.isArray(array)) {
    return NaN;
} else if(startIndex<0) {
    startIndex = 0;
} else if(endIndex>array.length-1) {
    endIndex = array.length-1;
}
let result = 0;
for(let i = startIndex; i <=endIndex; i++) {
    result+=Number(array[i]);
}
return result;
}
console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1))