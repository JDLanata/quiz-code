/// Global Variables
var highScore = document.getElementById("highscore");
var timer = document.getElementById("timer");
var quiz = document.getElementById("quizSpace");
var start = document.getElementById("start");
var scoreName = document.getElementById("nameAdd");

//Variables for question and answer buttons
var questBox = document.getElementById("questions");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

//button holder div variable
var options = document.getElementById("buttons");


// variable for message saying right or wrong answer
var valid = document.getElementById("valid");





//variable for timer
var timerLeft = 120;
console.log(timerLeft);

//points to index in questions object
var pointQuest = 0;
console.log(pointQuest);

var score = localStorage.getItem('score')
//object the holds questions array, choices array and answers
var questions = [
    {
        quest: "how tall is the moon?",
        choice: ["1", "4", "6", "12"],
        answer: 0,
    },
    {
        quest: "how small is the moon?",
        choice: ["8", "3", "6", "2"],
        answer: 1,
    },
    {
        quest: "how tall is the sand?",
        choice: ["9", "6", "7", "24"],
        answer: 2,
    },
    {
        quest: "how small is the color red?",
        choice: ["6", "1", "3", "8"],
        answer: 3,
    },
    {
        quest: "how may cats fit in a box?",
        choice: ["8", "5", "6", "156"],
        answer: 2,
    },

]

// listens for start of quiz
start.addEventListener("click", startQuiz);
var timeInterval 

function startQuiz() {
    /*Once button is pressed hide the start quiz button
    show quiz question 1 and answer buttons
    start timer */
    start.style.display = "none";
     timeInterval = setInterval(function () {
        timerLeft--;
        timer.textContent = "Timer: " + timerLeft;

        if (timerLeft === 0) {
            clearInterval(timeInterval);
            timer.textContent = "Times Up";
            console.log(timer);
        }


    }, 1000);


    console.log(start);


    test();
}



//displays quiz questions
function test() {
    options.style.display = "initial"
    questBox.style.display = "initial"

    questBox.textContent = questions[pointQuest].quest;
    btn1.textContent = questions[pointQuest].choice[0];
    btn2.textContent = questions[pointQuest].choice[1];
    btn3.textContent = questions[pointQuest].choice[2];
    btn4.textContent = questions[pointQuest].choice[3];

    // nameList();
}



var finalScore = 0;
// adds a point to the pointQuest variable to move to the next question

options.addEventListener("click", (event) => {

    if (event.target.getAttribute("data-index") == questions[pointQuest].answer) {
        valid.textContent = "Correct";

    } else {
        //decrease timer when question is answered wrong
        timerLeft -= 10;
        valid.textContent = "Wrong";

    }


    pointQuest++;
    if (pointQuest === questions.length && timerLeft > 0) {
        //save time to high score
        clearInterval(timeInterval);
        finalScore = timerLeft;

        // timerLeft.textContent(finalScore);

        nameList();
        return;

    }

    if (timerLeft <= 0) {
        return;
    }

    test();
    // console.log(pointQuest);

});





// add timmer with highscore local storage loop




//add function with final score and input name form
function nameList() {
    timer.textContent = timerLeft;
    options.style.display = "none";
    questBox.style.display = "none";
    scoreName.style.display = 'initial';

    


}
document.getElementById("submitBtn").addEventListener('click', addList);

// sellect what would be right answer inother funtion event listener?
//create and arry to hold top score list append that array with name inputs
var topScoreList = document.getElementById("topScoreList")
var scoreList = JSON.parse(localStorage.getItem("scores")) || [ ];


function addList(event) {
    event.preventDefault();
    
   
    var nameField = document.getElementById("nameFeild").value;
    
    
var topScoreUpdate = {
    user: nameField, 
    score: finalScore,
}

    scoreList.push(topScoreUpdate);

    for (let i = 0; i < scoreList.length; i++) {
        
        var newLi = document.createElement("li")
        newLi.append(scoreList[i].user + " - " + scoreList[i].score);
        topScoreList.append(newLi);
        console.log(scoreList[i].user)
    }

    localStorage.setItem("scores", JSON.stringify(scoreList));
//if clicked once do not subit again..

   //hide form 


}

var car = JSON.parse(localStorage.getItem("scores"))
console.log(car);
//