function notify(message) {
 let p = document.createElement("p");
 p.textContent = message;
 let divNotification = document.querySelector("#notification");
 divNotification.style.display = "block"
 divNotification.appendChild(p);
 divNotification.addEventListener('click', function handler(e) {
  e.target.style.display = "none"
 });
 }


