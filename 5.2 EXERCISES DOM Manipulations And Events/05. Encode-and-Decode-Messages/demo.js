function solve() {
    let text = "this is A message"
    let arr = text.split("");
    let newMessage = [];
    for (el of arr) {
        let elChar = el.charCodeAt();
        let currentChar = elChar + 1;
        let omg = String.fromCharCode(currentChar);
        newMessage.push(String.fromCharCode(currentChar)) 
    }
    console.log(newMessage);
}
solve()