function solve(str) {
    let rgx = /[a-zA-Z0-9]+/g;
    let matches = str.match(rgx);
    matches.map(f=>{ return f.toUpperCase(); });
    let str2 =String.prototype.toUpperCase.apply(matches);
    console.log(str2.split(",").join(", "));
}
solve("Hi, how are you?")