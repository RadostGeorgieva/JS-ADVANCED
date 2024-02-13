function personAndTeacher() {

    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
        toString() {
            let  current= super.toString();
            current = current.slice(0,-1);
            return `${current}, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;

        }
        toString() {
            let  current= super.toString();
            current = current.slice(0,-1);
            return `${current}, course: ${this.course})`;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

personAndTeacher();

let classes = personAndTeacher();
let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

let t = new Teacher("Ivan",'ivan@ivan.com',"Graphics");
console.log(t.toString());
