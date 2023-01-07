

$(document).ready(function () {

   
$( "#menu-btn" ).click(function() {
        $("#menu-btn2").toggle("fast", function(){
            if($("#menu-btn2").is(":visible")){
                $("#menu-btn2").is(":hidden");
            } else{
                $("#menu-btn2").is(":visible");
            }
        });
});
})
