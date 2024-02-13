function solve(array) {
    let data = [];

    for (let el of array) {
        let [product, price] = el.split(" : ");
        price = Number(price);
            data[product] = price
    }
    let entries =  Object.entries(data);
    entries.sort(function(a, b) {
      return a[0].localeCompare(b[0]);
     });
     let currentLetter = "";
    for (let i = 0; i < entries.length; i++) {
        if(i == 0) {
            console.log(`${entries[i][0][0]}`);
            console.log(`  ${entries[i][0]}: ${entries[i][1]}`);
            currentLetter = entries[i][0][0];
            continue;
        } if(entries[i][0][0] == currentLetter)
            console.log(`  ${entries[i][0]}: ${entries[i][1]}`);
        else {
            console.log(`${entries[i][0][0]}`);
            console.log(`  ${entries[i][0]}: ${entries[i][1]}`);
            }
            currentLetter = entries[i][0][0];
        }
      
      
}
solve(['Appricot : 20.4','Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'])