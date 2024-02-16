class FashionRetailInventory {
    constructor(storehouse, location, productStock) {
        this.storehouse = storehouse;
        this.location = location;
        this.productStock = [];
    }

    addProduct(productName, size, quantity, price) {
        let item = { productName, size, quantity, price };
        let product = this.productStock.filter(product => product.productName === productName); // Find shirt by name
        if (product.length > 0) {
            let productSize = product.find(thisSize => thisSize.size === size); // Find shirt by size
            if (productSize) {
                product.quantity += quantity;
                return `You added ${quantity} more pieces of product ${productName} size ${size}`;
            }
            else {
                this.productStock.push(item);
                return `The product ${productName}, size ${size} was successfully added to the inventory`
            }
        } else {
            this.productStock.push(item);
            return `The product ${productName}, size ${size} was successfully added to the inventory`
        }
    }
    sendProduct(productName, size) {
        let productIndex = this.productStock.findIndex(product => product.productName === productName && product.size === size); // Find shirt by name
        if (productIndex != -1) {
            this.productStock.splice(productIndex, 1);
            return `The product ${productName}, size ${size} was successfully removed from the inventory`
        } else {
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`)
        }
    }
    findProductsBySize(size) {
        let result = [];
        for (let el of this.productStock) {
            if (el.size == size) {
                result.push(`${el.productName}-${el.quantity} pieces`);
            }
        }
        if (result.length == 0) {
            return `There are no products available in that size`
        } else {
            return result.join(", ")
        }
    }
    listProducts() {
        if (this.productStock.length == 0) {
            return `${this.storehouse} storehouse is empty`
        } else {
            this.productStock.sort((productA, productB) => {
                return productA.productName.localeCompare(productB.productName)
            })
            let result = [`${this.storehouse} storehouse in ${this.location} available products:`];
            for (let el of this.productStock) {
                result.push(`${el.productName}/Size:${el.size}/Quantity:${el.quantity}/Price:${el.price}$`);
            }
            return result.join("\n");
        }
    }


}
const storeHouse = new FashionRetailInventory("East", "Milano");

  console.log(storeHouse.listProducts());



