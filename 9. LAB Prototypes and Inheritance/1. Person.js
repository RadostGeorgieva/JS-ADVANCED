function createPerson(firstName,lastName){
    const result = {
        firstName,lastName
    }

    Object.defineProperty(result, "fullName", {
        get() {  return `${this.firstName} ${this.lastName}`},
        set(value) { 
            let [_firstName, _lastName] = value.split(" ");
            if(_lastName != undefined) {
                this.firstName = _firstName;
                this.lastName = _lastName;
            }
         }
        });
        return result;
    
}


let person = createPerson("Albert", "Simpson");

console.log(person.fullName); //Albert Simpson

person.firstName = "Simon";

console.log(person.fullName); //Simon Simpson

person.fullName = "Peter";

console.log(person.firstName); // Simon

console.log(person.lastName); // Simpson
