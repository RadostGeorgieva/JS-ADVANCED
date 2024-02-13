function carManagment(arr) {
    let cars = {};
    for (let el of arr) {
        let [brand, model, qty] = el.split(" | ");
        if (!cars.hasOwnProperty(brand)) {
            cars[brand] = [];
            cars[brand].push({ model: model, qty: Number(qty) });
        } else {
            let found = false;
            for (const obj of cars[brand]) {
                if (obj.model === model) {
                    obj.qty += Number(qty);
                    found = true;
                }
            }

                if (!found) {
                    cars[brand].push({ model: model, qty: Number(qty) });
                }
            


        }
    }

    for (const obj of Object.entries(cars)) {
        console.log(obj[0]);
        for (let models of obj[1]) {
            console.log(`###${models.model} -> ${models.qty}`);
        }
    
    }

}
carManagment(['Audi | Q7 | 1000', 'Audi | Q7 | 1000',

    'Audi | Q6 | 100',

    'BMW | X5 | 1000', 'BMW | X5 | 3000',

    'BMW | X6 | 100',

    'Citroen | C4 | 123',

    'Volga | GAZ-24 | 1000000',

    'Lada | Niva | 1000000',

    'Lada | Jigula | 1000000',

    'Citroen | C4 | 22',
    'BMW | X5 | 3000',

    'Citroen | C5 | 10'])