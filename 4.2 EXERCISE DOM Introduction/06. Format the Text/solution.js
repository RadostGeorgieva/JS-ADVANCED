function solve() {
  let strdata = document.getElementById("input").value;
  let data = strdata.split(".")
  let count = 0;
  let createdP = "<p>";

  for (let i = 0; i < data.length; i++) {

    if (count <= 2) {
      createdP += data[i] + ".";
      count++;
    }
    else {
      createdP += "</p>";
      count = 0;
      if (i != (data.length - 1)) {
        createdP += "<p>" + data[i] + ".";
        count++;
      }

    }
  }

  let newstr= "";
if(createdP.endsWith("..")){
 
  newstr = createdP.slice(0, -2) + ".";
  createdP=newstr;
}
if(!(createdP.endsWith("</p>"))){
 
  createdP += "</p>";
}

  document.getElementById("output").innerHTML = createdP;

}