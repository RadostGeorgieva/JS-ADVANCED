
function solution() {

    let recepies = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }
    let stock = { carbohydrate: 0, fat: 0, protein: 0, flavour: 0 }


    function manager(str) {
        let count = 0;
        let [action, arg, quatity] = str.split(" ");

        if (action == "restock") {

            stock[arg] += Number(quatity);
            return "Success";

        } else if (action == "prepare") {

            let recepy = recepies[arg];

            for ([el, qty] of Object.entries(recepy)) {

                if (stock[el] < qty * quatity) {
                    for ([elReturn, qtyReturn] of Object.entries(recepy)) {
                        if (count > 0) {
                            stock[elReturn] += (qtyReturn*qty);
                            count--;
                        } else
                            return `Error: not enough ${el} in stock`

                    };

                } else {
                    stock[el] -= (qty*quatity);
                    count++;
                }
            }
            return "Success"
        } else if (action == "report") {
            return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`
        }
    }
    return manager;
}

let manager = solution();

console.log (manager ("restock flavour 50")); // Success

console.log (manager ("prepare lemonade 4"));
console.log(manager("prepare turkey 1")); // Success
console.log(manager("restock protein 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report"));