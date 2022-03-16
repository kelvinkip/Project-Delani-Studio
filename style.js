$(document).ready(function(){
    $("#design").click(function(event){
        $("#image1").show();
        $("#designp").hide()

    })
})

$(document).ready(function(){
    $("#development").click(function(event){
        $("#image2").show();
        $("#develop").hide();

    })
})

$(document).ready(function(){
    $("#product").click(function(event){
        $("#image3").show();
        $("#manage").hide();

    })
})

$(document).ready(function(){
  $("designp").hide()
    $("#design").mouseover(function(){
      $("#designp").show();
      $("#design").hide()
    }).mouseout(function(){
      $("#designp").hide();
      $("#design").show()
    });
  });
  $(document).ready(function(){
    $("#development").mouseover(function(){
      $("#develop").show();
      $("#development").hide()
    }).mouseout(function(){
      $("#develop").hide();
      $("#development").show()
    });
  });
  $(document).ready(function(){
    $("#product").mouseover(function(){
      $("#manage").show();
      $("#product").hide()
    }).mouseout(function(){
      $("#manage").hide();
      $("#product").show()
    });
  });
$("form#form").submit(function(event){
 var name = $("input#name").val();
 var email = $("input#email").val();
 var message = $("textarea#message").val();

 if ($("input#name").val() && $("input#email").val()){
 alert ("Hey " + name + ", we have received your wonderful message. Thank you for reaching out to Delani Studio, We shall get back to you ASAP!!");
 }
 else {
     alert("Please enter your name and email!");
 }
   
});

