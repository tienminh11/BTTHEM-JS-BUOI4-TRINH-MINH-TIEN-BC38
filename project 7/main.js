function number() {
  var a;
  var b;
  var c;
  var n = document.getElementById("n").value * 1;
  var total = "";
  a = Math.floor(n / 100);
  b = Math.floor(n / 10) % 10;
  c = n % 10;
  switch (a) {
    case 1:
      a = "Một trăm ";
      break;
    case 2:
      a = "Hai trăm ";
      break;
    case 3:
      a = "Ba trăm ";
      break;
    case 4:
      a = "Bốn trăm ";
      break;
    case 5:
      a = "Năm trăm ";
      break;
    case 6:
      a = "Sáu trăm ";
      break;
    case 7:
      a = "Bảy trăm ";
      break;
    case 8:
      a = "Tám trăm ";
      break;
    case 9:
      a = "Chín trăm ";
      break;
  }
  if (b == 0 && a != 0) {
    b = "lẻ ";
  }
  switch (b) {
    case 1:
      b = "mười ";
      break;
    case 2:
      b = "hai mươi ";
      break;
    case 3:
      b = "ba mươi ";
      break;
    case 4:
      b = "bốn mươi ";
      break;
    case 5:
      b = "năm mươi ";
      break;
    case 6:
      b = "sáu mươi ";
      break;
    case 7:
      b = "bảy mươi ";
      break;
    case 8:
      b = "tám mươi ";
      break;
    case 9:
      b = "chín mươi ";
      break;
  }
  if (c == 0) {
    c = "";
  }
  switch (c) {
    case 1:
      c = "mốt";
      break;
    case 2:
      c = "hai ";
      break;
    case 3:
      c = "ba ";
      break;
    case 4:
      c = "bốn ";
      break;
    case 5:
      c = "năm ";
      break;
    case 6:
      c = "sáu ";
      break;
    case 7:
      c = "bảy ";
      break;
    case 8:
      c = "tám ";
      break;
    case 9:
      c = "chín ";
      break;
  }
  total = a + b + c;
  document.getElementById("click").innerHTML = total;
}
