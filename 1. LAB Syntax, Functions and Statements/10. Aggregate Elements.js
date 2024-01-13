function aggregateElements(array) {
    let sum = 0;
    let reversedSum = 0;
    let concat = "";
for(el of array) {
sum+=el;
reversedSum+=1/el;
concat+=el.toString();
}
console.log(sum);
console.log(reversedSum);
console.log(concat);
}
aggregateElements([1, 2, 3])