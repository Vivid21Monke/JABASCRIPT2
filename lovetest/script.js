function love() {
let var1;
let var2;
let res;

  var1 = document.getElementById("va1").value;
  var2 = document.getElementById("va2").value;
  var1 = var1.toLowerCase();
  var2 = var2.toLowerCase();
  console.log(var1);
  let lov = Math.floor(Math.random() * 75);
  console.log(lov);
  // salīdzina vārdu garumus
  if(var1.length == var2.length) {
    lov = lov + 10;
    console.log(lov)
  } else {
    lov = lov;
  }  
  // Salīdzina vārda pirmos nurtus
  if(var1.charAt(0) == var2.charAt(0)) {
    lov = lov + 5; 
    console.log(lov);
  } else {
    lov = lov;
  }
  // Salīdzina vārdu trešos burtus
  if(var1.slice(2,3) == var2.slice(2,3)) {
    lov = lov + 15;
    console.log(lov)
  } else {
    lov = lov;
  }
  if(lov > 100){
    lov = 100;
    console.log(lov);
  } else {
    lov = lov;
  }
  
  document.getElementById("out").innerHTML = lov + "%";
}