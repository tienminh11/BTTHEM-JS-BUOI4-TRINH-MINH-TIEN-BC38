function day() {
  var month = document.getElementById("month").value * 1;
  var year = document.getElementById("year").value * 1;
  var day;
  var total = "";
  switch (month) {
    case 4:
    case 6:
    case 9:
    case 11:
      day = 30;
      break;
    case 2:
      if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
        day = 29;
      } else {
        day = 28;
      }
      break;
    default:
      day = 31;
  }
  if ((month == 6, 4, 9, 11 && month < 13)) {
    total = "Tháng " + month + " có " + day + " ngày";
  } else if (month == 2 && month < 13) {
    total = "Tháng " + month + " có " + day + " ngày";
  } else if ((month == 1, 3, 5, 6, 10, 12 && month < 13)) {
    total = "Tháng " + month + " có " + day + " ngày";
  } else {
    total = "Tháng không hợp lệ";
  }
  document.getElementById("click").innerHTML = total;
}
