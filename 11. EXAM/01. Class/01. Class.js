class BookClub {
    constructor(library) {
        this.library = library;
        this.books = [];
        this.members = [];
    }
    addBook(title, author) {
        let book = { title, author };
        let foundBook = this.books.find((b) => b.title == title && b.author == author);
        if (foundBook) {
            return `The book "${title}" by ${author} is already in ${this.library} library.`
        } else {
            this.books.push(book);
            return `The book "${title}" by ${author} has been added to ${this.library} library.`
        }
    }
    addMember(memberName) {
        if (this.members.includes(memberName)) {
            return `Member ${memberName} is already a part of the book club.`
        } else {
            this.members.push(memberName);
            return `Member ${memberName} has been joined to the book club.`
        }
    }
    assignBookToMember(memberName, bookTitle) {
        let titleFoundIndex = this.books.findIndex((b) => b.title == bookTitle);
        let book = this.books.find((b) => b.title == bookTitle);
        if (this.members.includes(memberName) == false) {
            throw new Error(`Member ${memberName} not found.`)
        } else if (titleFoundIndex == -1) {
            throw new Error(`Book "${bookTitle}" not found.`)
        } else {
            let author = book.author;
            this.books.splice(titleFoundIndex, 1);
            return (`Member ${memberName} has been assigned the book "${bookTitle}" by ${author}.`)

        }
    }
    generateReadingReport() {
        if (this.members.length <= 0) {
            return `No members in the book club.`
        } else if (this.books.length <= 0) {
            return "No available books in the library."
        } else {
            let result = [];
            result. push (`Available Books in ${this.library} library:`)
            for (let el of this.books) {
                result.push(`"${el.title}" by ${el.author}`);
            }
            return result.join("\n");
        }
    }



}


const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Peter"));
console.log(myBookClub.assignBookToMember("Peter", "1984"));
console.log(myBookClub.assignBookToMember("Alice", "To Kill a Mockingbird"));
console.log(myBookClub.generateReadingReport());
