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

/*

function reveal2() {
    document.getElementById("part2").style.display = "block";
}

function reveal3() {
    document.getElementById("part3").style.display = "block";
}

function reveal4() {
    document.getElementById("part4").style.display = "block";
}

function reveal5() {
    document.getElementById("part5").style.display = "block";
}

function reveal6() {
    document.getElementById("part6").style.display = "block";
}

function reveal7() {
    document.getElementById("part7").style.display = "block";
}

*/
