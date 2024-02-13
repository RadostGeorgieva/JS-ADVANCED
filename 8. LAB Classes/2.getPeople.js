
    class Person {
        static persons = [];
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
            Person.persons.push(this);
        }
    
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }
    
    
    console.log(person2.toString());
    console.log(getPersons());