function reveal(elementid) {

    document.getElementById(elementid).style.display = "block";

}

function SubForm(){
    $.ajax({
        url:'https://api.apispreadsheets.com/data/641/',
        type:'post',
        data:$("#form").serializeArray(),
        success: function(){
          alert("Form Data Submitted :)")
        },
        error: function(){
          alert("There was an error :(")
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
