function tomorrow() {
  var day = document.getElementById("day").value * 1;
  var month = document.getElementById("month").value * 1;
  var year = document.getElementById("year").value * 1;
  var time;
  var tomorrow = "";
  switch (month) {
    case 4:
    case 6:
    case 9:
    case 11:
      time = 30;
      break;
    case 2:
      time = 28 + (year % 400 === 0);
      break;
    default:
      time = 31;
  }
  day = (day % time) + 1;
  if (day == 1 && month <= 12) {
    month = (month % 12) + 1;
  }
  if (month == 1 && day == 1) {
    year++;
  }
  tomorrow = day + "/" + month + "/" + year;
  document.getElementById("click").innerHTML = tomorrow;
}

function yesterday() {
  var day = document.getElementById("day").value * 1;
  var month = document.getElementById("month").value * 1;
  var year = document.getElementById("year").value * 1;
  var time;
  var yesterday = "";
  switch (month) {
    case 5:
    case 7:
    case 10:
    case 12:
      time = 30;
      break;
    case 3:
      if (year % 400 == 0) {
        time = 29;
      } else {
        time = 28;
      }
      break;
    default:
      time = 31;
  }

  if (day == 1 && month > 1) {
    day = time
    month--;
  } else if (month == 1 && day == 1) {
    day = time
    month = 12;
    year--;
  } else {
    day--;
  }

  yesterday = day + "/" + month + "/" + year;
  document.getElementById("click").innerHTML = yesterday;
}
