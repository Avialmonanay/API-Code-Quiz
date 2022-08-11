// all global variables
var result = document.querySelector('.result')
var container = document.querySelector('.container')
var timerEl = document.getElementById('countdown')
var quiz = document.getElementById('quiz')
var win = document.getElementById('correct')
var loss = document.getElementById('loss')
var displayq = document.getElementById('question')
var c1 = document.getElementById('choice1')
var c2 = document.getElementById('choice2')
var c3 = document.getElementById('choice3')
var c4 = document.getElementById('choice4')
let correct = 0;
let incorrect = 0;
let index = 0;




const text = document.createElement('p')
const home = document.createElement('a')
const hscore = document.createElement('a')

text.textContent = 'Quiz Over'
home.textContent = '<a class="btn" href="Main-Page.html">Home</a>'
hscore.textContent = '<a class="btn" href="highscores.html">highscores</a>'



var quizQs = [
    {
        question: "Commonly used data types DO NOT include:",
        a: [{ text: "strings", isCorrect: "false" },
        { text: "booleans", isCorrect: "false" },
        { text: "alerts", isCorrect: "true" },
        { text: "numbers", isCorrect: "false" }
        ]


    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        a: [{ text: "quotes", isCorrect: "false" },
        { text: "curly brackets", isCorrect: "false" },
        { text: "parentheses", isCorrect: "true" },
        { text: "square brackets", isCorrect: "false" }
        ]
    },

    {
        question: "Arrays in JavaScript can be used to store ____.",
        a: [{ text: "numbers and strings", isCorrect: "false" },
        { text: "other arrays", isCorrect: "false" },
        { text: "booleans", isCorrect: "false" },
        { text: "all of the above", isCorrect: "true" }
        ]
    },

    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        a: [{ text: "commas", isCorrect: "false" },
        { text: "quotes", isCorrect: "true" },
        { text: "curly brackets", isCorrect: "false" },
        { text: "parentheses", isCorrect: "false" }
        ]
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        a: [{ text: "console.log", isCorrect: "true" },
        { text: "JavaScript", isCorrect: "false" },
        { text: "terminal / bash", isCorrect: "false" },
        { text: "for loops", isCorrect: "false" }
        ]
    }


]


var timeLeft = 90;


function countdown() {
    getquestion()
    

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timerEl.textContent = '0 seconds remaining';

            clearInterval(timeInterval)
            // gameover()
        }


    }, 1000);
}

//gets a questions from the quizQs array, itterates through the questions each time it is called. If at the end of questions calls to game over function.
function getquestion() {

    if (index === 5) {
        gameover()
    }

    
    thisquestion = quizQs[index];
    displayq.innerText = thisquestion.question

    thisawnser = quizQs[index];



    //sets answers text and the data value for correct/incorrect and increases index number.
    c1.innerText = thisawnser.a[0].text
    c2.innerText = thisawnser.a[1].text
    c3.innerText = thisawnser.a[2].text
    c4.innerText = thisawnser.a[3].text
    c1.setAttribute("data-state", thisawnser.a[0].isCorrect)
    c2.setAttribute("data-state", thisawnser.a[1].isCorrect)
    c3.setAttribute("data-state", thisawnser.a[2].isCorrect)
    c4.setAttribute("data-state", thisawnser.a[3].isCorrect)
    index++;

}

container.addEventListener("click", function(event) {
    var element = event.target
    if (element.matches("p")){
        var state = element.getAttribute("data-state")
        
        if (state == "true"){
        console.log("win")
        correct++;
        win.textContent = correct
        timeLeft+=5;
        result.textContent = "Correct! + 5 Seconds"
        getquestion()
        }

        else {
            console.log("loss")
            incorrect++;
            loss.textContent = incorrect;
            timeLeft-=15;
            result.textContent = "Incorrect! - 15 Seconds"
            getquestion()
        }

    }

});








// function gameover() {
//     container.innerHTML = '';
// container.append(text, home, hscore)
// }


//   getquestion()
countdown()