function total() {
  var number1 = document.getElementById("num1").value * 1;
  var number2 = document.getElementById("num2").value * 1;
  var number3 = document.getElementById("num3").value * 1;
  var x = 0;
  var y = 0;
  var result = "";

  if (number1 % 2 === 0) {
    result = x++;
  } else {
    result = y++;
  }
  if (number2 % 2 === 0) {
    result = x++;
  } else {
    result = y++;
  }
  if (number3 % 2 === 0) {
    result = x++;
  } else {
    result = y++;
  }
  result ="Có "+ x + " số chẵn và " + y + " số lẻ";
  document.getElementById("click").innerHTML = result;
}
