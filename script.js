$(function() {
    console.log( "ready!" );
  $("#textOutput").text("");

$('#btnSendText').on('click', function (e) {
e.preventDefault();
var getInput = $('#textInput').val(); //WATCH OUT, this .text is the wrong property to call. Look for a method() to get the contents of an input box.
//then maybe some other div?
$('#textOutput').append('<p>'+getInput+'</p>'); 
// then some code, somehow to change the format of the <p>, like css uppercase, lowercase, color, size, font-family...etc.    
  });

});