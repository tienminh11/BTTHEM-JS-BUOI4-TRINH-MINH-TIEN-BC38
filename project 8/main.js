function find() {
  var student1 = document.getElementById("student1").value;
  var student2 = document.getElementById("student2").value;
  var student3 = document.getElementById("student3").value;
  var x = document.getElementById("x").value * 1;
  var x1 = document.getElementById("x1").value * 1;
  var x2 = document.getElementById("x2").value * 1;
  var x3 = document.getElementById("x3").value * 1;
  var y = document.getElementById("y").value * 1;
  var y1 = document.getElementById("y1").value * 1;
  var y2 = document.getElementById("y2").value * 1;
  var y3 = document.getElementById("y3").value * 1;
  var d1;
  var d2;
  var d3;
  var d;
  var total = "";
  d1 = Math.sqrt((x - x1) * (x - x1) + (y - y1) * (y - y2));
  d2 = Math.sqrt((x - x2) * (x - x2) + (y - y2) * (y - y2));
  d3 = Math.sqrt((x - x3) * (x - x3) + (y - y3) * (y - y3));
  if (d1 > d2 && d1 > d3) {
    d = student1;
  } else if (d2 > d1 && d2 > d3) {
    d = student2;
  } else if (d3 > d1 && d3 > d2) {
    d = student3;
  }
  total = " SV xa nhất là: " + d;
  document.getElementById("click").innerHTML = total;
}
