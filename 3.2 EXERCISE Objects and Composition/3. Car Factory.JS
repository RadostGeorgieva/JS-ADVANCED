function carFactory(request) {

    let myCar = { model: request.model }

    let smallEngine = { power: 90, volume: 1800 };
    let normalEngine = { power: 120, volume: 2400 };
    let monsterEngine = { power: 200, volume: 3500 };

    if (request.power <= 90) {
        myCar.engine = smallEngine;
    }
    else if (request.power <= 120) {
        myCar.engine = normalEngine;
    }
    else {
        myCar.engine = monsterEngine;
    }

    myCar.carriage = {
        type: request.carriage, color: request.color
    }

    if (request.wheelsize % 2 == 0) {
        myCar.wheels = [Math.floor(request.wheelsize) - 1, Math.floor(request.wheelsize) - 1, Math.floor(request.wheelsize) - 1, Math.floor(request.wheelsize) - 1,];
    }
    else {
        myCar.wheels = [Math.floor(request.wheelsize), Math.floor(request.wheelsize), Math.floor(request.wheelsize), Math.floor(request.wheelsize),];
    }

    return myCar;
}
carFactory({ model: 'VW Golf II',

power: 90,

color: 'blue',

carriage: 'hatchback',

wheelsize: 14 })