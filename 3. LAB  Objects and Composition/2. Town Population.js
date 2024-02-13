function solve(arr) {
    let record = {};
    for(let i = 0; i<arr.length; i++) { 

    let  [name, population] = arr[i].split(" <-> ");
    population = Number(population)
    if(record.hasOwnProperty(name)) {
        record[name]+=population;
    } else {
        record[name] = population;
    }

}
for(el in record) {
    console.log(`${el} : ${record[el]}`);
}
}
solve(['Sofia <-> 1200000',

'Montana <-> 20000',

'New York <-> 10000000',

'Washington <-> 2345000',

'Las Vegas <-> 1000000'])