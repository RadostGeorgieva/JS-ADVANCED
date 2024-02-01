function solve() {

   let elements = document.getElementsByClassName("product");

   for (el of elements) {

      let btn = el.getElementsByClassName("add-product")[0];
      let item = el.getElementsByClassName("product-title")[0].textContent;
      let price = el.getElementsByClassName("product-line-price")[0].textContent;
      let total = 0;
      let items = [];
      let lines = 0;
      btn.addEventListener("click", handler);

      function handler(element) {
         debugger
         price = Number(price)
         total += price;
         items.push(item);
         let str = `Added ${item} for ${Number(price).toFixed(2)} to the cart.\n`
         let textareas = document.getElementsByTagName('textarea');

         textareas[0].removeAttribute('disabled');
         textareas[0].textContent += str;
         lines++;
      }

      let checkout = el.getElementsByClassName("checkout")[0];
      checkout.addEventListener("click", check);

      function check (event) {
         let textareas = document.getElementsByTagName('textarea');

         textareas[0].removeAttribute('disabled');
         textareas[0].textContent += `You bought ${items.join(", ")} for ${total.toFixed(2)}`;
         textareas[0].setAttribute('disabled');

         let allButtons = document.getElementsByClassName("add-product");
         for(b of allButtons) {
            b.setAttribute('disabled',true);
         }

      }
   }
}