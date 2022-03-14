$(document).ready(function(){
    $("#design").click(function(event){
        $("#image1").show();
        $("#hide").show();
        $("#image1").show()

    })
})

$(document).ready(function(){
    $("#development").click(function(event){
        $("#image2").show();
        $("#hi").show();

    })
})

$(document).ready(function(){
    $("#product").click(function(event){
        $("#image3").toggle();
        $("#plan").hide();

    })
})

// $(document).ready(function(){
//     $("#design").mouseover(function(){
//       $("#hide").show();
//       // $("#hide").hided()
//     }).mouseout(function(){
//       $("#hide").hide();
//       $("#design").show()
//     });
//   });
let myForm=document.querySelector("#mail")
  myForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let jina = myForm.jina.value;
    alert(jina + "" + " we have received your message.Thank you for reaching out to us." );
})