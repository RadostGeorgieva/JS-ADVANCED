function solve(data, criteria) {
    let arr = JSON.parse(data);
    let [cr, value] = criteria.split("-");
    function toBePrinted(parsedData) {
        let counter = 0;
        if (parsedData.length == 0 && value == "all") {
            parsedData = data;
        }
        for (let el of parsedData) {
            console.log(`${counter}. ${el.first_name} ${el.last_name} - ${el.email}`);
            counter++;
        }
    }
    let filtered = toBePrinted(arr.filter((item) => item[cr] == value));

    return filtered;

}
solve(`[{

    "id": "1",
    
    "first_name": "Kaylee",
    
    "last_name": "Johnson",
    
    "email": "k0@cnn.com",
    
    "gender": "Female"
    
    }, {
    
    "id": "2",
    
    "first_name": "Kizzee",
    
    "last_name": "Johnson",
    
    "email": "kjost1@forbes.com",
    
    "gender": "Female"
    
    }, {
    
    "id": "3",

    "first_name": "Evanne",

    "last_name": "Maldin",

    "email": "emaldin2@hostgator.com",

    "gender": "Male" 

    }, { 

    "id": "4",

    "first_name": "Evanne",

    "last_name": "Johnson",

    "email": "ev2@hostgator.com",
    
    "gender": "Male" }]`,
    'last_name-Johnson')