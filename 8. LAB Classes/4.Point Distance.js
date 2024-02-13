class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    static distance(point1, point2) {
        return Math.sqrt(Math.pow((point2.x - point1.x),2) + (Math.pow((point2.y - point1.y),2)) )
        // d=√((x2 – x1)² + (y2 – y1)²).
    }
}


let p1 = new Point(5, 5);

let p2 = new Point(9, 8);

console.log(Point.distance(p1, p2));