

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


const text = document.createElement('p')
const home = document.createElement('a')
const hscore = document.createElement('a')

text.textContent = 'Quiz Over'
home.textContent = '<a class="btn" href="Main-Page.html">Home</a>'
hscore.textContent = '<a class="btn" href="highscores.html">highscores</a>'



var quizQs = [
    {
        question: "I am not a number 1",
        a: [{ text: "1", isCorrect: false },
        { text: "2WHAT HAPPEND IF I AM SUPER DUPER LONGs", isCorrect: false },
        { text: "3", isCorrect: true },
        { text: "4", isCorrect: false }
        ]


    },
    {
        question: "I am not a number 2",
        a: [{ text: "4", isCorrect: false },
        { text: "5", isCorrect: false },
        { text: "6", isCorrect: true },
        { text: "7", isCorrect: false }
        ]
    },

    {
        question: "I am not a number 3",
        a: [{ text: "8", isCorrect: false },
        { text: "9", isCorrect: false },
        { text: "10", isCorrect: true },
        { text: "11", isCorrect: false }
        ]
    },

    {
        question: "I am not a number 4",
        a: [{ text: "1", isCorrect: false },
        { text: "2", isCorrect: false },
        { text: "3", isCorrect: true },
        { text: "4", isCorrect: false }
        ]
    },

    {
        question: "I am not a number 5",
        a: [{ text: "1", isCorrect: false },
        { text: "2", isCorrect: false },
        { text: "3", isCorrect: true },
        { text: "4", isCorrect: false }
        ]
    }


]

var timeLeft = 3;


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

function getquestion() {


    if (quizQs.length === 0) {
        gameover()
    }

    const index = Math.floor(Math.random() * quizQs.length)
    thisquestion = quizQs[index];
    displayq.innerText = thisquestion.question

    thisawnser = quizQs[index];




    c1.innerText = thisawnser.a[0].text
    c2.innerText = thisawnser.a[1].text
    c3.innerText = thisawnser.a[2].text
    c4.innerText = thisawnser.a[3].text


}

container.addEventListener("click", function(event) {
    var element = event.target
    if (element.matches("p")){
        console.log(element)
    }

});








// function gameover() {
//     container.innerHTML = '';
// container.append(text, home, hscore)
// }


//   getquestion()
countdown()