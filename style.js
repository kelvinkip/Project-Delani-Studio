$(document).ready(function(){
    $("#design").click(function(event){
        $("#image1").show();
        $("#hide").hide()
        // $("#hide").show();
        // $("#image1").show()

    })
})

$(document).ready(function(){
    $("#development").click(function(event){
        $("#image2").show();
        $("#hi").hide();

    })
})

$(document).ready(function(){
    $("#product").click(function(event){
        $("#image3").show();
        $("#plan").hide();

    })
})

$(document).ready(function(){
    $("#design").mouseover(function(){
      $("#hide").show();
      // $("#hide").hided()
    }).mouseout(function(){
      $("#hide").hide();
      $("#design").show()
    });
  });
  $(document).ready(function(){
    $("#design").mouseover(function(){
      $("#hide").show();
      // $("#hide").hided()
    }).mouseout(function(){
      $("#hide").hide();
      $("#design").show()
    });
  });
  $(document).ready(function(){
    $("#design").mouseover(function(){
      $("#hide").show();
      // $("#hide").hided()
    }).mouseout(function(){
      $("#hide").hide();
      $("#design").show()
    });
  });
let myForm=document.querySelector("#email")
  myForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let myname = myForm.myname.value;
    alert(myname + "" + " we have received your message.Thank you for reaching out to us." );
})