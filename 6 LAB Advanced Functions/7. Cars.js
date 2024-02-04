function solve(commands) {
    let actions = {
        create: (obj1, inherit, obj2) => {
            if (inherit) {
                actions[obj1] = Object.create(actions[obj2]);
                inherited[obj1] = obj2;
            } else {
                actions[obj1] = {};
            }
        },
        set: (obj1, property, value) => actions[obj1][property] = value,
        inh: () => {
                for(let [key,value] of Object.entries(inherited)){
                let obj2 = value
                let obj1 = key
                Object.assign(actions[obj1], actions[obj2]);
            }
        },
        print: (obj) => {
            actions.inh(obj);
            console.log(Object.entries(actions[obj]).map(([key, value]) => `${key}:${value}`).join(","))
        }
    }

    let inherited = {};
    for (let el of commands) {
        let [action, obj, text, obj2] = el.split(" ");
        actions[action](obj, text, obj2);
    }
}

solve([
    'create pesho','create gosho inherit pesho','create stamat inherit gosho','set pesho rank number1','set gosho nick goshko','print stamat'
]);

