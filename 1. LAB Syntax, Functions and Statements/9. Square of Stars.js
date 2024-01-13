function squareOfStars(input) {
    if(input == 0 || typeof(input)!= "number") {
        input = 5;
    }
    for(let i =0; i < input; i++) {
        console.log(("* ".repeat(input)));
    }
}
squareOfStars(5)