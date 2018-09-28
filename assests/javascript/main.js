let correctAnswer = 0;
let incorrect = 0;
let unanswered = 0;

//once DOM is open, we should see only #container1.  Hide all other containers
$(document).ready(function(){
    $("#container2").hide();
    $("#container3").hide();
    
//The game is time-limited to 120 seconds. This "TIME-LIMITED" will be set to count down which will be 
//changing values turn TIME-LIMITED into a variable
let timeLimited = 3;    
let intervalId;

//when the button is click hide #container2 & #container#3 and show l#container1. Timer starts counting down - 
//Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
    $("#btn").on("click", function() {
        $("#container1").hide();
        $("#container2").show();
        $("#container3").hide();
        
        intervalId = setInterval(decrement, 1000);
    })
    


//ALL THE FUNCTIONS STARTS HERE =========================================================================
    
        //a DECREMENT function to countdown
        function decrement() {
            timeLimited--;
            $("#timer").html("<h2>" + timeLimited + "</h2>");
            if (timeLimited === 0) {
                //...run the stop function.
                stop();
                
                //after time is up, the document checks all the answers
                let question1 = document.quiz.question1.value;
                if (question1 === "Correct"){
                    correctAnswer=+1;
                    alert("correct");
                }
                else if (question1 === "Wrong"){
                    alert("Wrong");
                    incorrect++;
                }
                else {
                    unanswered++;
                }

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

        
        //output the scores to DOM
        $("#cAnswers").text("You got: " + correctAnswer );
        $("#iAnswers").text("Wrong: " + incorrect );
        $("#uAnswers").text("Unanswered: " + unanswered );
}) //<--- closes the $(document).ready function()

//when time is up, all answer is submit to server side 

