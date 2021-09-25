/// Global Variables
var highScore = document.getElementById("highscore");
var timer = document.getElementById("timer");
var quiz = document.getElementById("quizSpace");
var start = document.getElementById("start");
var questBox = document.getElementById("questions")
var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var btn3 = document.getElementById("btn3")
var btn4 = document.getElementById("btn4")

var timerLeft = 10;

var pointQuest = 0;

var questions = [
    {
        quest: "how tall is the moon?",
        choice: ["8", "4", "6", "12"],
        answer: 0,
    },
    {
        quest: "how tall is the moon?",
        choice: ["8", "4", "6", "12"],
        answer: 0,
    },
    {
        quest: "how tall is the moon?",
        choice: ["8", "4", "6", "12"],
        answer: 0,
    },
    {
        quest: "how tall is the moon?",
        choice: ["8", "4", "6", "12"],
        answer: 0,
    },
    {
        quest: "how tall is the moon?",
        choice: ["8", "4", "6", "12"],
        answer: 0,
    },

]

start.addEventListener("click",startQuiz)


function startQuiz(){
/*Once button is pressed hide the start quiz button
show quiz question 1 and answer buttons
start timer */
start.style.display = "none";
console.log(start);
quiz();
}

pointQuest++;

function quiz(){
questBox.textContent = questions[pointQuest].quest
btn1.textContent = questions[pointQuest].choice[0]
btn2
btn3
btn4
// textcontent quest
// sellect what would be righjt answer inother funtion event listener


}
