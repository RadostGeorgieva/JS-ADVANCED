function solve(arr) {
    let actions= {
        add: (str) => result.push(str),
        remove: (str) => result = result.filter(i => i !== str),
        print: () => console.log(result.join(","))
    }

    let result = [];
    for(let el of arr) {
        let [action, str] = el.split(" ");
        actions[action](str);
    }
   
}
solve(['add pesho', 'add george', 'add peter', 'remove peter','print'])