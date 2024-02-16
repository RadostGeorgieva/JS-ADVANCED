class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (spaceRequired > this.warehouseSpace) {
            throw new Error('Not enough space in the warehouse.');
        } else {
            this.products.push({ [product]: quantity });
            this.warehouseSpace -= spaceRequired;
            return `The ${product} has been successfully delivered in the warehouse.`
        }
    }
    quantityCheck(product, minimalQuantity) {
        if (minimalQuantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }
        for (let i = 0; i < this.products.length; i++) {
            const entry = this.products[i];
            if (entry.hasOwnProperty(product)) {
                if (minimalQuantity <= entry[product]) {
                    return `You have enough from product ${product}.`
                } else {
                    let difference = minimalQuantity - entry[product];
                    entry[product] += difference;
                    return `You added ${difference} more from the ${product} products.`
                }
            }
        }
        throw new Error(`There is no ${product} in the warehouse.`);

    }

    sellProduct(product) {
        for (let i = 0; i < this.products.length; i++) {
            const entry = this.products[i];
            if (entry.hasOwnProperty(product)) {
                entry[product] -= 1;
                this.sales.push({ [product]: 1 })
                return `The ${product} has been successfully sold.`
            }
        }
        throw new Error(`There is no ${product} in the warehouse.`);
    }
    revision() {
        if (this.sales.length == 0) {
            throw new Error(`There are no sales today!`);
        } else {
            let allLeft = "Products in the warehouse:\n";
            for (let i = 0; i < this.products.length; i++) {
                const productName = Object.keys(this.products[i])[0]; // Get the product name
                const productQuantity = Object.values(this.products[i])[0]; // Get the product quantity
                allLeft += `${productName}-${productQuantity} more left\n`;
            }
            let sale = this.sales.length;
            return `You sold ${sale} products today!\n${allLeft.trimEnd()}`;
        }
    }
}



const myOnlineShop = new OnlineShop(500)

console.log(myOnlineShop.loadingStore('headphones', 10, 200));

console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));

console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));

console.log(myOnlineShop.sellProduct('laptop'));

console.log(myOnlineShop.revision());