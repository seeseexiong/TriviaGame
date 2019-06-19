let correctAnswer = 0;
let incorrect = 0;
let unanswered = 0;

//The game is time-limited to 60 seconds. This "TIME-LIMITED" will be set to count down which will be 
//changing values, turn TIME-LIMITED into a variable
let timeLimit = 60;    
let intervalId;

//once DOM finished loading, we should see only #container1.  Hide all other containers
$(document).ready(function(){
    $("#container2").hide();
    $("#container3").hide();
    
//when the #btn button is click hide #container1 and #container#3, and show #container2. Timer starts counting down - 
//Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
    $("#btn").on("click", function() {
        clearInterval(intervalId);
        
        $("#container1").hide();
        $("#container2").show();
        $("#container3").hide();
        
        intervalId = setInterval(decrement, 1000);
    })

//FUNCTIONS FOR ANSWERS START HERE =========================================================================

        //a DECREMENT function to countdown
        function decrement() {
            timeLimit--;
            $("#timer").html("<h2>" + timeLimit + "</h2>");
            if (timeLimit === 0) {
                //...run the stop function.
                stop();

                //after time is up, the document checks all the answers
                let question1 = document.quiz.question1.value;
                    check(question1);

                let question2 = document.quiz.question2.value;
                    check(question2);

                let question3 = document.quiz.question3.value;
                    check(question3);

                let question4 = document.quiz.question4.value;
                    check(question4);

                let question5 = document.quiz.question5.value;
                    check(question5);

                let question6 = document.quiz.question6.value;
                    check(question6);

                let question7 = document.quiz.question7.value;
                    check(question7);

                let question8 = document.quiz.question8.value;
                    check(question8);

                let question9 = document.quiz.question9.value;
                    check(question9);

                let question10 = document.quiz.question10.value;
                    check(question10);

                let question11 = document.quiz.question11.value;
                    check(question11);

                let question12 = document.quiz.question12.value;
                    check(question12);

                let question13 = document.quiz.question12.value;
                    check(question13);

                let question14 = document.quiz.question12.value;
                    check(question14);
                    


                //show the result(contained in #container3).  Hide all other containers.
                $("#container1").hide();
                $("#container2").hide();
                $("#container3").show();

                //output the scores to DOM
                $("#cAnswers").text("Correct Answers: " + correctAnswer );
                $("#iAnswers").text("Incorrect Answers: " + incorrect );
                $("#uAnswers").text("Unanswered: " + unanswered );
            }//<--closes the TIMELIMIT if statement
        }//<--- closes the decrement function

        //a STOP funciton to stop the timer
        function stop() {
            clearInterval(intervalId);
        }

            //a funtion to TEST the answers****************************
        function check(x) {
            if (x === "Correct"){
                correctAnswer++;
            }
            else if (x === "Wrong"){
                incorrect++;
            }
            else {
                unanswered++;
            }
        }//<--closes the CHECK function

    
}) //<--- closes the $(document).ready function()

//when time is up, all answer is submit to client side

