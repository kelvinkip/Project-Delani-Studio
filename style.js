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
let myForm=document.querySelector("#email")
  myForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let myname = myForm.myname.value;
    alert(myname + "" + " we have received your message.Thank you for reaching out to us." );
})