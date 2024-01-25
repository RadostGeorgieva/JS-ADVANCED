function lowestPricesInCities(arr) {

    let result = {};

    for (let index of arr) {
        let [town, product, price] = index.split(' | ');
        price = Number(price);

        if (!(Object.keys(result).find(key => key == product)) || result[product].price > price) {
            result[product] = { price, town };
        }
    }

    for (let [key, value] of Object.entries(result)) {
        console.log(`${key} -> ${value.price} (${value.town})`);
    }
}
lowestPricesInCities(['Sample Town | Sample Product | 1000',

'Sample Town | Orange | 2',

'Sample Town | Peach | 1',

'Sofia | Orange | 3',

'Sofia | Peach | 2',

'New York | Sample Product | 1000.1',

'New York | Burger | 10'])