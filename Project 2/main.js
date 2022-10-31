function info() {
  var name = document.getElementById("name").value;
  var father = document.getElementById("Father").value;
  var mother = document.getElementById("Mother").value;
  var brother = document.getElementById("Brother").value;
  var sister = document.getElementById("Sister").value;
  var text = "";
  if (name === father) {
    text = "Xin chào " + father + "!";
  } else if (name === mother) {
    text = "Xin chào " + mother + "!";
  } else if ((name === brother)) {
    text = "Xin chào " + brother + "!";
  } else {
    text = "Xin chào " + sister + "!";
  }
  document.getElementById("check").innerHTML = text;
}
