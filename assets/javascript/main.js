let answers = ['a', 'c', 'b', 'a', 'b', 'c', 'a', 'b', 'a', 'b', 'c', 'a', 'c', 'b'];
let numOfQuestions = 14;
let score = 0;
let wrong = 0;
let unanswered = 0;
let percentage = 0;
//The game is time-limited to 60 seconds. This "TIME-LIMITED" will be set to count down which will be 
//changing values, turn TIME-LIMITED into a variable
let timeLimit = 100;    
let intervalId;

//once DOM finished loading, we should see only #container1.  Hide all other containers
// $(document).ready(function(){
$('#container1').show();
$('#container2').hide();
$('#container3').hide();
    
//when the #btn button is click hide #container1 and #container#3, and show #container2. Timer starts counting down - 
//Clearing the intervalId prior to setting our new intervalId will avoid allow multiple instances.
$('#btn').click(start)

//display time on DOM
$('#timer').html('<h2>' + timeLimit + '</h2>');

function start() {
    // clearInterval(intervalId);
    $('#container1').hide();
    $('#container2').show();
    $('#container3').hide();
    
    intervalId = setInterval(decrement, 1000);
}

//DECREMENT FUNCTION to countdown - - - - - - - - - - - - - - - - - - - - -
function decrement() {
    timeLimit--;
    //display time on DOM
    $('#timer').html('<h2>' + timeLimit + '</h2>');
    
    //integer of timer changes colors
    if (timeLimit <= 30) {
        $('#timer').css('color', 'yellow')
    }
    if (timeLimit <= 20) {
        $('#timer').css('color', 'orange')
    }
    if (timeLimit <= 10) {
        $('#timer').css('color', 'red')
    }

    //if timeLimit reaches 0 then run
        //result function to return the results
    if (timeLimit === 0) {
        result();
    }
};

//STOP FUNCTION stops the timmer - - - - - - - - - - - - - - - - - - - - - - 
function stop() {
    clearInterval(intervalId);
}   

//if player finished before time runs up, then they can submit their answer using the submit button
$('#submit-btn').on('click', result);

function result() {
    //stops the timer
    stop();

    //show container3
    $('#container1').hide();
    $('#container2').hide();
    $('#container3').show();

    //reference to the chosen answer
    let q1 = document.forms['quiz']['q1'].value;
    let q2 = document.forms['quiz']['q2'].value;
    let q3 = document.forms['quiz']['q3'].value;
    let q4 = document.forms['quiz']['q4'].value;
    let q5 = document.forms['quiz']['q5'].value;
    let q6 = document.forms['quiz']['q6'].value;
    let q7 = document.forms['quiz']['q7'].value;
    let q8 = document.forms['quiz']['q8'].value;
    let q9 = document.forms['quiz']['q9'].value;
    let q10 = document.forms['quiz']['q10'].value;
    let q11 = document.forms['quiz']['q11'].value;
    let q12 = document.forms['quiz']['q12'].value;
    let q13 = document.forms['quiz']['q13'].value;
    let q14 = document.forms['quiz']['q14'].value;

    //check user's answer - loop through numOfQuestions
    for ( let i = 1; i <= numOfQuestions; i++ ){
        if (eval('q' + i) == '') {
            unanswered++;
        }
        else if (eval('q' + i) == answers[i - 1]) {
            score++;
        }
        else {
            wrong++;
        }
    }

    //calculate grade in percentage
    percentage = Math.ceil(score / numOfQuestions) * 10
    console.log(percentage)

    //print results on DOM
    $('#cAnswers').text(score);
    $('#iAnswers').text(wrong);
    $('#uAnswers').text(unanswered);
    $('#percentage').text(percentage);

};

