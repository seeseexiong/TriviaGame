window.onload = function() {
   
    $("#container2").hide();
    
    
//when the button is click, hide container2 and show container1. Timer starts counting down
    $("#btn").on("click", function() {
        $("#container2").show() && $("#container1").hide();
            
        })
}
        

//when time is up, all answer is submit to server side 

