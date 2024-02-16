class WineSelection {
    constructor(space) {
        this.space = space
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.space <= 0) {
            throw new Error(`Not enough space in the cellar.`)
        } else {
            this.wines.push({ wineName, wineType, price: Number(price), paid: false })
            this.space -= 1;
            return `You reserved a bottle of ${wineName} ${wineType} wine.`
        }

    }
    payWineBottle(wineName, price) {
        let wine = this.wines.find(wine => wine.wineName === wineName); // Find wine by name
        if (!wine) {
            throw new Error(`${wineName} is not in the cellar.`);
        } else if (wine.paid == true) {
            throw new Error(`${wineName} has already been paid.`)
        } else {
            wine.paid = true;
            this.bill += Number(price);
            return `You bought a ${wineName} for a ${price}$.`
        }
    }
    openBottle(wineName) {
        let wineIndex = this.wines.findIndex(wine => wine.wineName === wineName);
        if (wineIndex == -1) {
            throw new Error(`The wine, you're looking for, is not found.`)
        }
        else if (this.wines[wineIndex].paid == false) {
            throw new Error(`${wineName} need to be paid before open the bottle.`)
        } else {
            this.wines.splice(wineIndex, 1);
            return `You drank a bottle of ${wineName}.`

        }
    }
    cellarRevision(wineType) {
        let result = "";
        if (wineType == undefined) {
            result += `You have space for ${this.space} bottles more.`+ "\n";
            result += `You paid ${this.bill}$ for the wine.`+ "\n";
            this.wines.sort((wineA, wineB) => {
                return wineA.wineName.localeCompare(wineB.wineName)
            })
            for(let el of this.wines) {
                if(el.paid == false) {
                result+=  `${el.wineName} > ${el.wineType} - Not Paid.`+ "\n";
                } else {
                result+=  `${el.wineName} > ${el.wineType} - Has Paid.`+ "\n";
                }
            }
            return result.trimEnd();
        } else {
            let wine = this.wines.filter(wine => wine.wineType === wineType);
            if(wine.length >0) {
                for(let el of wine) {
                    if(el.paid == false) {
                        result+=  `${el.wineName} > ${el.wineType} - Not Paid.` + "\n";
                        } else {
                        result+=  `${el.wineName} > ${el.wineType} - Has Paid.`+ "\n";
                        }
                }
                return result.trimEnd();
            }else {
                throw new Error(`There is no ${wineType} in the cellar.`)
            }
        }
       

    }
}

const selection = new WineSelection(5)

selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);

selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision("wrong"));
