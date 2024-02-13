class List {
    constructor() {
        this.arr = [];
        this.size = this.arr.length;
    }
    add(number) {
        this.arr.push(number);
        this.arr.sort((a,b) => a-b);
        this.size = this.arr.length;
        return this.arr
        
    }
    remove(index) {
        if(index>=0 || index < this.arr.size){
        this.arr.splice(index,1);
        this.size = this.arr.length;
        return this.arr
        }
    }
    get(index) {
        if(index>=0 || index < this.arr.size){
        return this.arr[index];
        }
    }

}
let list = new List();
list.add(5);

list.add(3);

list.remove(0);

console.log(list.get(0));
 console.log(list.size);
