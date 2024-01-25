function solve(arr) {
    arr.sort(function(a,b){
     if(a.length==b.length) {
         return a.localeCompare(b);
     } else return a.length - b.length;
    });
  
  for(el of arr) {
     console.log(el);
  }
 }