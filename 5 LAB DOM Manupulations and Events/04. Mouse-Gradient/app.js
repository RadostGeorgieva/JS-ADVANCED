function attachGradientEvents() {
   let gradient = document.getElementById("gradient");
   gradient.addEventListener('mousemove', gradientMove);
   gradient.addEventListener('mouseout', gradientOut);
debugger
   function gradientMove(event) {
    let gradientBoxWidth = event.target.clientWidth;
    const positionOfMouse = event.offsetX / (gradientBoxWidth-1);
    let percentage = Number(Math.trunc(positionOfMouse*100));
    document.getElementById("result").textContent = `${percentage}%`;

   }
   function gradientOut () {
    document.getElementById("result").textContent = "";
   }
}