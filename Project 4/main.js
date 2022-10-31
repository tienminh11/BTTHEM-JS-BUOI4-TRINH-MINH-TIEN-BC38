function result() {
  var a = document.getElementById("a").value * 1;
  var b = document.getElementById("b").value * 1;
  var c = document.getElementById("c").value * 1;
  var x = "";
  if (a === b || a === c || b === c) {
    if ((a, b !== c)) {
      x = "Tam giác cân";
    } else if ((a, c !== b)) {
      x = "Tam giác cân";
    } else if ((b, c !== a)) {
      x = "Tam giác cân";
    } else if (a === b && b === c && c === a) {
      x = "Tam giác đều";
    }
  } else if (a !== b && b !== c && c !== a) {
    x = "Tam giác vuông";
  } else {
    x = "Giá trị không hợp lệ";
  }
  document.getElementById("click").innerHTML = x;
}
