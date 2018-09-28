let correct = 0;
let incorrect = 0;
let unanswered = 0;




//once DOM is open, we should see only #container1.  Hide all other containers
window.onload = function() {
   
    $("#container2").hide();
    $("#container3").hide();
    
//The game is time-limited to 120 seconds. This "TIME-LIMITED" will be set to count down which will be 
//changing values turn TIME-LIMITED into a variable
var timeLimited = 120;    
var intervalId;

//when the button is click hide #container2 & #container#3 and show l#container1. Timer starts counting down - 
//Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
    $("#btn").on("click", function() {
        $("#container1").hide();
        $("#container2").show();
        $("#container3").hide();
        intervalId = setInterval(decrement, 1000);
    })
        



//ALL THE FUNCTIONS STARTS HERE =========================================================================

        //a function to ADD to CORRECT answers
        function correctSum() {
            cAnswers++;
        }

        //a function to ADD to INCORRECT answers
        function incorrectSum() {
            iAnswers++;
        }

        //a function to ADD to UNANSWERED questions
        function unansweredSum() {
            uAnswers++;
        }

        //a DECREMENT function to countdown
        function decrement() {
            timeLimited--;
            $("#timer").html("<h2>" + timeLimited + "</h2>");
            if (timeLimited === 0) {
                //...run the stop function.
                stop();
                //show the result(contained in #container3).  Hide all other containers.
                $("#container1").hide();
                $("#container2").hide();
                $("#container3").show();
            }
        }//<--- closes the decrement function


        //a STOP funciton to stop the timer
        function stop() {
            clearInterval(intervalId);
        }
} //<--- closes the window.onload function()

//when time is up, all answer is submit to server side 

