class Company {

    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        let employee = [name, salary, position, department];
        if (employee.includes("") || employee.includes(null) || employee.includes(undefined)) {
            throw new Error("Invalid input!")
        }
        if (salary <0) {
            throw new Error("Invalid input!")
        }
        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        }
        this.departments[department].push({ name: name, salary: salary, position: position });

        return `New employee is hired. Name: ${name}. Position: ${position}`
    }
    bestDepartment() {
        let best = 0;
        let bestDep;
        let total = 0;
        let count = 0;
        for (let el of Object.entries(this.departments)) {
            for (let emp of el[1]) {
                total += emp.salary;
                count++;
            }
            if ((total / count) > best) {
                best = (total / count);
                bestDep = el;
            }
            count = 0;
            total = 0;
        }
    
        bestDep[1].sort(function(keyA, keyB) {
        if (keyA.salary !== keyB.salary) {
            return keyB.salary-keyA.salary;
        } else {  //keyA == keyB
            return keyA.name.localeCompare(keyB.name);
        }
    })
    let allEmployees = "";
        for (let emp of bestDep[1]) {
            allEmployees+=`${emp.name} ${(emp.salary)} ${emp.position}\n`;
        }
        if ((total / count) > best) {
            best = (total / count);
            bestDep = el;
        }
        count = 0;
        total = 0;
    
    return (`Best Department is: ${bestDep[0]}\nAverage salary: ${best.toFixed(2)}\n${allEmployees.trimEnd()}`);
    }


}

let c = new Company();

console.log(c.addEmployee("Stanimir", 2000, "engineer", "Construction"));

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());


'Best Department is: Human resources\nAverage salary: 1675.00\nStanimir 2000 engineer\nGosho 1350 HR\n' 
'Best Department is: Human resources\nAverage salary: 1675.00\nStanimir 2000 engineer\nGosho 1350 HR'