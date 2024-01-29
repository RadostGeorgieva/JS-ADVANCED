function extract(content) {
    let contentAsStr = `${content}`;
let cont = document.getElementById("content").textContent;
const regex = /\(([^\)]+)\)/g;
let m = regex.exec(cont);
let result =  [];
while(m) {
result.push(m[1])
m = regex.exec(cont);
}

return result.join("; ");

}