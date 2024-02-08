function printDeckOfCards(cards) {
    let toPrint = "";
    for(let c of cards) {
        let [face,suit,addition] = c.split("");
        if(addition){
            face += suit;
            suit=addition;
        }
        let result = createCards(face, suit)

        if(result == "Invalid card: ") {
            console.log(result + face+suit);
            return;
        } else {
            toPrint+=result+ " ";
        }
        
    }
    console.log(toPrint);
    function createCards(face, suit) {
        let keys = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

        // Check if the face is valid
        if (!keys.includes(face)) {
            return ("Invalid card: ");
        }

        // Check if the suit is valid
        let validSuits = ["S", "H", "D", "C"];
        if (!validSuits.includes(suit)) {
            return ("Invalid card: ");
        }

        // Create the card object
        let card = {
            face: face,
            suit: suit,
            toString: function () {
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
        let cardAndSymbol = card.toString();
        return cardAndSymbol;
    }
}

printDeckOfCards(['AS', '10D', 'KH', '2C'])
printDeckOfCards(['5S', '3D', 'QD', '1C'])