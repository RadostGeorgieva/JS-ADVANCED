function solution (number) {

    function func (a) {
        return number + a;
    }
    return func;
}
let add5 = solution(5);

console.log(add5(2));

console.log(add5(3))