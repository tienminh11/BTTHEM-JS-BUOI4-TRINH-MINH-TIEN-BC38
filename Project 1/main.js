function arrange() {
  var a = document.getElementById("number1").value * 1;
  var b = document.getElementById("number2").value * 1;
  var c = document.getElementById("number3").value * 1;
  var kq = "";
  if (a < b && a < c) {
    if (b < c) {
      kq = a + "," + b + "," + c;
    } else {
      kq = a + "," + c + "," + b;
    }
  } else if (b < c && b < a) {
    if (a < c) {
      kq = b + "," + a + "," + c;
    } else {
      kq = b + "," + c + "," + a;
    }
  } else if (c < b && c < a) {
    if (a < b) {
      kq = c + "," + a + "," + b;
    } else {
      kq = c + "," + b + "," + a;
    }
  }
  document.getElementById("check").innerHTML = kq;
}
