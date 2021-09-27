/// Global Variables
var highScore = document.getElementById("highscore");
var timer = document.getElementById("timer");
var quiz = document.getElementById("quizSpace");
var start = document.getElementById("start");
var questBox = document.getElementById("questions");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var options = document.getElementById("buttons");
var valid = document.getElementById("valid");
var timerLeft = 60;
console.log(timerLeft);
var pointQuest = 0;
console.log(pointQuest);

//object the holds questions array, choices array and answers
var questions = [
    {
        quest: "how tall is the moon?",
        choice: ["8", "4", "6", "12"],
        answer: 0,
    },
    {
        quest: "how small is the moon?",
        choice: ["8", "4", "6", "12"],
        answer: 1,
    },
    {
        quest: "how tall is the sand?",
        choice: ["8", "4", "6", "12"],
        answer: 2,
    },
    {
        quest: "how small is the color red?",
        choice: ["8", "4", "6", "12"],
        answer: 3,
    },
    {
        quest: "how may cats fit in a box?",
        choice: ["8", "4", "6", "12"],
        answer: 2,
    },

]

// listens for start of quiz
start.addEventListener("click", startQuiz);


function startQuiz() {
    /*Once button is pressed hide the start quiz button
    show quiz question 1 and answer buttons
    start timer */
    start.style.display = "none";
    timerLeft--; // needs to be put in a function for start and countdown
    console.log(start);
test();
}

options.addEventListener("click",nextQuest);


//displays quiz questions
function test() {
    options.style.display = "initial"
    questBox.style.display = "initial"

    questBox.textContent = questions[pointQuest].quest;
    btn1.textContent = questions[pointQuest].choice[0];
    btn2.textContent = questions[pointQuest].choice[1];
    btn3.textContent = questions[pointQuest].choice[2];
    btn4.textContent = questions[pointQuest].choice[3];
// nextQuest();

}


// adds a point to the pointQuest variable to move to the next question

function nextQuest(){
    if( questions[pointQuest].choice[0] === questions[pointQuest].answer){
        valid.textContent = "Correct";

    }else{

        // valid.textContent = "Worng";
    }
    
    
    pointQuest++;

test();
console.log(pointQuest);
}


// add timmer with highscore local storage loop
//add function with final score and input name form
//

// sellect what would be right answer inother funtion event listener?