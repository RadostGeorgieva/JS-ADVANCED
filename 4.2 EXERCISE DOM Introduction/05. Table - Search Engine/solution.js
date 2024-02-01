function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let search = document.getElementById("searchField").value;
      let table = document.querySelectorAll("table tbody tr");
      for (let i = 0; i < table.length; i++) {
         let cols = table[i].children;
         for (let j = 0; j < cols.length; j++) {
            let current = cols[j]
            if(current.textContent.includes(search))
            {
               table[i].classList.add("select");
            }
            
         }

      }
      document.getElementById("searchField").value = "";
   }
}