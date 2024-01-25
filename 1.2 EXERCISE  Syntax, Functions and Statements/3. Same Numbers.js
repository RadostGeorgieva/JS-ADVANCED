function sameNumbers(n) {
    let array = String(n).split("");
    let total = 0;
    let isSame = true;
    for(el of array) {
        if (el!= array[0]) {
            isSame = false;
        }
        total+=Number(el);
    }
    console.log(isSame);
    console.log(total);
}
sameNumbers(12345)