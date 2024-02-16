function solution() {
    class Baloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;

        }
    }

    class PartyBalloon extends Baloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this.ribbonColor = ribbonColor;
            this.ribbonLength = ribbonLength;
            this._ribbon = {color: ribbonColor,length: ribbonLength};
            
        }
        get ribbon() {
            return this._ribbon;
        }
    }
    class BirthdayBalloon extends PartyBalloon {
        constructor(color,gasWeight,ribbonColor, ribbonLength, text) {

            super(color,gasWeight,ribbonColor, ribbonLength);

           this._text = text;
        }
        get text() {
            return this._text;
        }
    }
    //Object.defineProperty(PartyBalloon, 'ribbonColor', {enumerable:false})
    //Object.defineProperty(PartyBalloon, 'ribbonLength', {enumerable:false})
    return {
        Balloon: Baloon,
        PartyBalloon: PartyBalloon,
        BirthdayBalloon: BirthdayBalloon
    }
   
}

let classes = solution();

let testBalloon = new classes.Balloon(

    "yellow", 20.5);

let testPartyBalloon = new

    classes.PartyBalloon("yellow", 20.5,

        "red", 10.25);

let ribbon = testPartyBalloon.ribbon;

console.log(testBalloon);

console.log(testPartyBalloon);

console.log(ribbon)