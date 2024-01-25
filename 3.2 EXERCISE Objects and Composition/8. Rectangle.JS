function rectangle(width, height, color) {
    let rect = {calcArea() {
        return this.width * this.height
    }}
    let newColor = color.charAt(0).toUpperCase() + color.slice(1);
    rect.width = width;
    rect.height = height;
    rect.color = newColor;
        return rect;
    }
    let rect = rectangle(4, 5, 'red');

    console.log(rect.width);
    
    console.log(rect.height);
    
    console.log(rect.color);
    
    console.log(rect.calcArea());
    