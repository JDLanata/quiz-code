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
        quest: "What is the first temple you have to go through after becoming an adult in Ocarina of Time?",
        choice: ["Forest Tepmle", "Water Temple", "Shadow Temple", "Spirit Temple"],
        answer: 0,
    },
    {
        quest: "What is the name of the joke shop that Fred and Gorge opened?",
        choice: ["Wheezing Weasleys", "Weasleys' Wizard Wheezes", "Wizards Wheels", "F&G for the lols"],
        answer: 1,
    },
    {
        quest: "What is the name of the Main Hero in the Legend of Zelda series?",
        choice: ["Tingle", "Zelda", "Link", "Malon"],
        answer: 2,
    },
    {
        quest: "In Howl's Moving Castle, what is Calcifer?",
        choice: ["A socerer", "Great and Powerful Fire Demon", "The Missing Prince", "The Which of the Waste in desgise"],
        answer: 1,
    },
    {
        quest: "Whar score on your O.W.L.S do you need to be able to join Professor Slughorns' Advanced Potions Class?",
        choice: ["Acceptable ", "Dreadful ", "Troll", "Exceeds Expectations"],
        answer: 3,
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

        }


    }, 1000);





    test();
}



//displays quiz questions
function test() {
    options.style.display = "block";
    questBox.style.display = "block";

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

        clearInterval(timeInterval);
        finalScore = timerLeft;

        valid.style.display= "none";
        nameList();
        return;

    }

    if (timerLeft <= 0) {
        options.style.display = "none";
        questBox.style.display = "none";
        valid.style.display= "none";
        return;
    }

    test();


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
var scoreList = JSON.parse(localStorage.getItem("scores")) || [];


highScore.textContent = "Last Score: " + scoreList[scoreList.length - 1].score;


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

    }

    localStorage.setItem("scores", JSON.stringify(scoreList));
    //if clicked once do not subit again..

    //hide form 


}


//