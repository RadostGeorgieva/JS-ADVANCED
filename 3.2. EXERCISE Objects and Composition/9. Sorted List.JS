function createSortedList() {
    let listData = {data: [],

                    size:0
                };
        listData.add = (n)  => {
           listData.data[listData.size]=n;
           listData.size++;
           //let sorted = Object.keys(listData.data);
           listData.data.sort((a, b) => a - b);
        };
        listData.remove = (index) => {
            if (index >= 0 && (index < listData.size)) {
                listData.data.splice(index, 1);
                listData.data.sort((a, b) => a - b);
                listData.size--;
            }
        }
        listData.get =(index) => {
            if (index >= 0 && (index < listData.size)) {
                return listData.data[index];
            } else {
                return "";
            }
        }
        
    
    return listData;
}
let list = createSortedList();

list.add(5);

list.add(6);
list.add(7); console.log(list.get(1)); list.remove(1); console.log(list.get(1));