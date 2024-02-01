function search() {
   let items = document.querySelectorAll("ul li");
   debugger
   let search = document.getElementById("searchText").value;
   let count = 0;
   
  
      for(item of items) {
      if(item.textContent.includes(search)){
      count++;
      item.style.textDecoration = "underline";
      item.style.fontWeight = "bold";
      }
   }
   document.getElementById("result").textContent = `${count} matches found`
}  