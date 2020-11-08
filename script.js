function reveal(elementid) {

    document.getElementById(elementid).style.display = "block";

}

function SubForm() {
  $.ajax({
    url:'https://api.apispreadsheets.com/data/3245/',
    type:'post',
    data:$("#myForm").serializeArray(),
    success: function(){
      document.getElementById("success").style.display = "block"
    },
    error: function(){
      document.getElementById("error").style.display = "block"
    }
  });
}


function changetheme() {

    var x = document.getElementById("background");

  if (x.className === "light") {

    x.className = "dark";

  } else {

    x.className = "light";

  }

}
