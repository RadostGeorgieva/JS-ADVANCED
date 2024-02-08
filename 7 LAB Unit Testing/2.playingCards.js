function solve(face, suit) {
    let keys = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    
    // Check if the face is valid
    if (!keys.includes(face)) {
        throw new Error("Invalid face");
    }

    // Check if the suit is valid
    let validSuits = ["S", "H", "D", "C"];
    if (!validSuits.includes(suit)) {
        throw new Error("Invalid suit");
    }

    // Create the card object
    let card = {
        face: face,
        suit: suit,
        toString: function() {
            let symbol;
            switch (suit) {
                case "S": symbol = "\u2660"; break;
                case "H": symbol = "\u2665"; break;
                case "D": symbol = "\u2666"; break;
                case "C": symbol = "\u2663"; break;
            }
            return `${face}${symbol}`;
        }
    };
    return card;
}

console.log(solve('Q', 'C'))
