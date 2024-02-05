function sorted(arr, way) {
    if(way == "asc") {
        arr.sort((a,b)=> a-b);
    } else if(way == "desc") {
        arr.sort((a,b)=>b-a);
    }
return arr;
}
sorted([14, 7, 17, 6, 8], 'desc')