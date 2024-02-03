function solve() {
  let totalPrice = 0;
  let boughtItems = [];
  let totalDecoration = 0;
  let counter = 0;
  let currentCheckboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));

  for(let el of currentCheckboxes) {
    el.disabled = false;
  }
  let itemsList = document.querySelectorAll("textarea");


  let generateBtn = document.querySelectorAll("button")[0];
  generateBtn.addEventListener("click", function (element) {
    inputData(element, itemsList);
  })

  let boughtBtn = document.querySelectorAll("button")[1];
  boughtBtn.addEventListener("click", function (element) {
    boughtData(element, totalPrice, boughtItems,totalDecoration, itemsList);
  })
  function inputData(element, itemsList) {
    let arr = JSON.parse(itemsList[0].value);
    let tableData = document.querySelector("tbody");
    for (let i = 0; i < arr.length; i++) {

      let currentRow = document.createElement("tr");
      tableData.appendChild(currentRow);

      //create photo
      let tdPhoto = document.createElement("td");
      let photo = document.createElement("img");
      let image = arr[i];
      photo.src = image.img;
      tdPhoto.appendChild(photo);
      currentRow.appendChild(tdPhoto);
      //create name
      let tdName = document.createElement("td");
      let name = document.createElement("p");
      name.textContent = arr[i].name;
      tdName.appendChild(name);
      currentRow.appendChild(tdName);
      //create price
      let tdPrice = document.createElement("td");
      let price = document.createElement("p");
      price.textContent = arr[i].price;
      tdPrice.appendChild(price);
      currentRow.appendChild(tdPrice);
      //decoration factor
      let tdDecoration = document.createElement("td");
      let decoration = document.createElement("p");
      decoration.textContent = arr[i].decFactor;
      tdDecoration.appendChild(decoration);
      currentRow.appendChild(tdDecoration);
      //mark
      let tdMark = document.createElement("td");
      let mark = document.createElement("input");
      mark.type ="checkbox"
      mark.disabled = false;
      tdMark.appendChild(mark);
      currentRow.appendChild(tdMark);


    }
  
    
  }
   function boughtData (element, totalPrice, boughtItems,totalDecoration, itemsList) {
    let checked = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
    for(ch of checked) {
      let crRow = ch.parentElement.parentElement.children;
        boughtItems.push(crRow[1].textContent)
        totalPrice+=Number(crRow[2].textContent);
        totalDecoration+=Number(crRow[3].textContent);
        counter++;
    }
    itemsList[1].disabled = false;
    let result = "";
    result += `Bought furniture: ${boughtItems.join(", ")}` + "\n";
    result += `Total price: ${totalPrice.toFixed(2)}` + "\n";
    result += `Average decoration factor: ${totalDecoration/counter}`
    itemsList[1].textContent = result;
    itemsList[1].disabled = true;
    
   }
  debugger

}
