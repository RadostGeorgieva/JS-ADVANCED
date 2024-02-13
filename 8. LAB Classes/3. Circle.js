class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get diameter() {
        return this._radius*2;
    }

    get area() {
        return Math.PI*(this._radius ** 2);

    }

    set diameter(newdiameter) {
        if (newdiameter <= 0) {
            throw new Error("Radius must be a positive number");
          }
        this._diameter = newdiameter;
        this._radius = this._diameter/2;
    }

    get radius() {
        return this._radius;
    }

}

let c = new Circle(2);

console.log(`Radius: ${c.radius}`);

console.log(`Diameter: ${c.diameter}`);

console.log(`Area: ${c.area}`);

c.diameter = 1.6;

console.log(`Radius: ${c.radius}`);

console.log(`Diameter: ${c.diameter}`);

console.log(`Area: ${c.area}`)
