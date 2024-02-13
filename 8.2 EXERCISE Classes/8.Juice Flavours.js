function juiceCreator(arr) {
    let allJuice = {};
    let bottles = {};
for(let el of arr) {
   let [type, qty] = el.split(" => ");
    if(allJuice.hasOwnProperty(type)){
        
        allJuice[type]+=Number(qty);
    } else {
        allJuice[type]=Number(qty);
    }
    if(allJuice[type]>=1000){
        let bottleQty = parseInt(allJuice[type]/1000)
        if(bottles.hasOwnProperty(type)){
        
            bottles[type]+=bottleQty;
        } else {
            bottles[type]=bottleQty;
        }
        allJuice[type]-=bottleQty*1000;
    }

}

for(let el of Object.entries(bottles)){
    console.log(`${el[0]} => ${el[1]}`);
}}
juiceCreator(['Kiwi => 234',

'Pear => 2345',

'Watermelon => 3456',

'Kiwi => 4567',

'Pear => 5678',

'Watermelon => 6789'])