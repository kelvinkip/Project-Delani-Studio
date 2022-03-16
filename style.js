  $(document).ready(function(){

    
    $("#design").click(function() {
        $("#design").hide();
        $("#designp").show();
    });
    $("#designp").click(function() {
        $("#designp").hide();
        $("#design").show();
    });

   
    $("#development").click(function() {
        $("#development").hide();
        $("#develop").show();
    });
    $("#develop").click(function() {
        $("#develop").hide();
        $("#development").show();
    });


    $("#product").click(function() {
        $("#product").hide();
        $("#manage").show();
    });
    $("#manage").click(function() {
        $("#manage").hide();
        $("#product").show();
    });

    
    $("#product").click(function() {
        $("#product").hide();
        $("#manage").show();
    });
    $("#manage").click(function() {
        $("#manage").hide();
        $("#product").show();
    });






$("form#form").submit(function(event){
 var name = $("input#name").val();
 var email = $("input#email").val();
 var message = $("textarea#message").val();

 if ($("input#name").val() && $("input#email").val()){
 alert ("Hey " + name + ", we have received your message. Thank you for contacting Delani Studio, We shall get back to you very soon thanks!!");
 }
 else {
     alert("Kindly enter your name and email!");
 }
 
});
  });