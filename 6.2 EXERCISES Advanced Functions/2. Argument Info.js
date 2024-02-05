function solve() {
    let arg = Array.prototype.slice.call(arguments);
    let allData = {}
    for (el of arg) {
        console.log(`${typeof(el)}: ${el}`);

        if (!allData.hasOwnProperty(typeof(el))) {
            allData[typeof(el)] = {counter: 1};
        } else {
            allData[typeof(el)].counter++;

        }
    }
    let arr =  Object.entries(allData)
    arr.sort((a,b) => b[1].counter - a[1].counter);
    
    for([key,value] of arr){
        console.log(`${key} = ${value.counter}`);
    }
}
    solve({ name: 'bob'}, 3.333, 9.999)
    console.log(`======`);
    solve('cat', 42, function () { console.log('Hello world!'); })