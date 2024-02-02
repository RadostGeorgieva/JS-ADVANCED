function solve() {

   let elements = document.querySelectorAll(".product");
   for(let el of elements){
      el.addEventListener("click", handler);
   }

   let items = new Set;
   let total = 0
   let disabled = false;

   function handler(event) {
      const isButton = event.target.classList.contains('add-product');
      console.log(event.target.className)
      if (!isButton) {
        return;
      }
      let btnParent = event.target.parentElement;
      let childrn = btnParent.parentElement;
      console.log(btnParent)
      let item = childrn.getElementsByClassName("product-title")[0].textContent;
      let price = childrn.getElementsByClassName("product-line-price")[0].textContent;
     ;
     
      let lines = 0;
  
      debugger
      price = Number(price)
      total += price;
      items.add(item);
      let str = `Added ${item} for ${Number(price).toFixed(2)} to the cart.\n`
      let textareas = document.getElementsByTagName('textarea');

      textareas[0].removeAttribute('disabled');
      textareas[0].textContent += str;
      lines++;
   }


  
   
      let checkout = document.getElementsByClassName("checkout")[0];
      checkout.addEventListener("click", check);

      function check (event) {
         if(disabled)
         {return}
         let textareas = document.getElementsByTagName('textarea');
         textareas[0].textContent += `You bought ${Array.from(items).join(", ")} for ${total.toFixed(2)}.`;
         textareas[0].setAttribute('disabled',true);
         disabled = true;

         let allButtons = document.getElementsByTagName("button");
         for(let b of allButtons) {
            b.setAttribute('disabled',true);
         }

      }
   }
