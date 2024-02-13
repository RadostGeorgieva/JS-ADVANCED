function solve(array) {
    let data = [];

    for (let i = 1; i < array.length; i++) {
        let [empty, town, latitude, longitude] = array[i].split("|");
        let current = {Town: town.trim(), Latitude: (Number(latitude.trim()).toFixed(2)), Longitude: (Number(longitude.trim()).toFixed(2))}
        current.Latitude = Number(current.Latitude);
        current.Longitude = Number(current.Longitude)
        data.push(current)
       
}
let toJason = JSON.stringify(data);
console.log(toJason);
}
solve(['| Town | Latitude | Longitude |',

'| Sofia | 42.696552 | 23.32601 |',

'| Beijing | 39.913818 | 116.363625 |'])