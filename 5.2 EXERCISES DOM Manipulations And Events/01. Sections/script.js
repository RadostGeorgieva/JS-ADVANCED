function create(words) {
   for ( let i = 0; i < words.length; i++) {
      let p = document.createElement("p");
      p.textContent = words[i];
      p.style.display = "none"
      let div = document.createElement("div");
      div.appendChild(p);
      div.addEventListener("click", handler);
      let el = document.getElementById("content");
      el.appendChild(div);

   }
   function handler(event) {
      let currentP = event.target.children;
      currentP[0].style.display = "block";

   }
}