function reveal(elementid) {

    document.getElementById(elementid).style.display = "block";

}

function SubForm() {
  $.ajax({
    url:'https://api.apispreadsheets.com/data/3245/',
    type:'post',
    data:$("#myForm").serializeArray(),
    success: function(){
      document.getElementById("success").style.display = "block",
      window.location.href = "credits.html"
    },
    error: function(){
      document.getElementById("error").style.display = "block"
    }
  });
}

$(document).ready(function() {
  $('#inputWrapper').on('keyup', '#message', function() {
    if($(this).val() == '') {
      $('div#final-button').text('Non ho niente da dire');
      $('div#final-button').removeClass('special');
      $('div#final-button').addClass('continue');
    } else {
      $('div#final-button').text('Invii il messaggio');
      $('div#final-button').removeClass('continue');
      $('div#final-button').addClass('special');
    }
  });
});

function waiting() {
  document.getElementById('final-button').innerHTML = 'invio in corso...';
}


function changetheme() {

    var x = document.getElementById("background");

  if (x.className === "light") {

    x.className = "dark";

  } else {

    x.className = "light";

  }

}
