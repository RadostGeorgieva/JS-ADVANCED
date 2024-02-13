class Hex { 
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return `0x`+(this.value.toString(16)).toUpperCase();
    }
    plus(number) {
        if(number instanceof Hex) {
           let newHex = new Hex (Number(number.value) + Number(this.value));
           return newHex;
        } else {
            let newHex = new Hex (Number(number) + Number(this.value));
            return newHex;
        }
        
    }
    minus(number) {
         return new Hex (Number(this.value) - Number(number));
    }
    parse(str) {
       return parseInt(str,16)
    }
}


let FF = new Hex(255);
//assert.instanceOf(FF,Hex);
//assert.equal(FF.valueOf(),255);

let act = FF.toString();
let exp = "0xFF";
//assert.equal(act,exp);

//assert.isTrue(FF.valueOf() -1  == 254);
let a = new Hex(10);
let b = new Hex(5);
let c = new Hex(155);
let act2 = a.plus(c).toString();
let exp2 = "0xA5";
//assert.equal(act2,exp2);
let act3 = a.minus(b).toString();
let exp3 = "0x5";
//assert.equal(act3,exp3);