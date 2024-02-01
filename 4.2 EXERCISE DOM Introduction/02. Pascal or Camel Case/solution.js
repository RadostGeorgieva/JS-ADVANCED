function solve() {
  let str = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;
  let result = "";
  if(convention == "Camel Case") {
      let ans = str.toLowerCase();
      result = ans.split(" ").reduce((s, c) => s
          + (c.charAt(0).toUpperCase() + c.slice(1)));

  } else if (convention == "Pascal Case") {
    result = str.replace(/\w+/g,
    function(w){return w[0].toUpperCase() + w.slice(1).toLowerCase();});
  } else {
    result = "Error!"
  }
  document.getElementById("result").textContent = result.split(" ").join("");


}
