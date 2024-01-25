function solve(a, b) {
    let gcd = function(a, b) {
        if (b == 0) {
            return a;
        }
    return gcd(b, a % b);
    };
    console.log(gcd(a,b));
}
solve(2154, 458)