function solve(arr) {
    let sorted =[];
   arr.sort((a,b)=> a-b);
 while(!arr.length==0){
    sorted.push(arr.shift());
    sorted.push(arr.pop());
   }
  return sorted;
}