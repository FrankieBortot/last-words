function reveal(elementid) {

    document.getElementById(elementid).style.display = "block";

}




function changetheme() {

    var x = document.getElementById("background");

  if (x.className === "light") {

    x.className = "dark";

  } else {

    x.className = "light";

  }

}
