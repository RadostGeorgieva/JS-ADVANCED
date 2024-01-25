function fruitPrice(fruit, grams, priceKG) {
    console.log(`I need $${(priceKG*(grams/1000)).toFixed(2)} to buy ${(grams/1000).toFixed(2)} kilograms ${fruit}.`);
}
fruitPrice('apple', 1563, 2.35)