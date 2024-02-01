function deleteByEmail() {
    let email = document.querySelectorAll('input[name=email]')[0].value;
    let table = document.querySelectorAll('table tbody tr');
    debugger;
    let deleted = false;
    for (let i = 0; i < table.length; i++) {
        let row = table[i].children;
        let element =  row[1].textContent;
        if(element == email) {
            table[i].remove();
            deleted = true;
        }
    }
  deleted ? document.getElementById("result").textContent = "Deleted." : document.getElementById("result").textContent = "Not found."

}