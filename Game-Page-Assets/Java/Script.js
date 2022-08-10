var timerEl = document.getElementById('countdown')
var game = document.getElementById('game')
var win = document.getElementById('correct')
var loss = document.getElementById('loss')
var container = document.querySelector('.container')
var displayq = document.getElementById('question')

const text = document.createElement('p')
const home = document.createElement('a')
const hscore = document.createElement('a')

text.textContent = 'Quiz Over'
home.textContent = '<a class="btn" href="Main-Page.html">Home</a>'
hscore.textContent = '<a class="btn" href="highscores.html">highscores</a>'



var quizQs = [
    {
        question: "I am not a number",

        answers:{
            a: "1",
            b: "2",
            c: "3",
            d: "4",
        },

        answer: "b"
    },

    {
        question: "I am not a number",

        answers:{
            a: "1",
            b: "2",
            c: "3",
            d: "4",
        },

        answer: "c"
    },

    {
        question: "I am not a number",

        answers:{
            a: "1",
            b: "2",
            c: "3",
            d: "4",
        },

        answer: "a"
    },

    {
        question: "I am not a number",

        answers:{
            a: "1",
            b: "2",
            c: "3",
            d: "4",
        },

        answer: "d"
    },

    {
        question: "I am not a number",

        answers:{
            a: "1",
            b: "2",
            c: "3",
            d: "4",
        },

        answer: "d"
    }


]




function countdown() {
    getquestion ()
    var timeLeft = 3;
    
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

  function getquestion () {


    if (quizQs.length === 0) {
        gameover()
    }
    
    const index = Math.floor(Math.random() * quizQs.length)
        thisquestion = quizQs[index];
        displayq.innerText= thisquestion.question
        // displayq.innerHTML = displayq.question;





    // quizQs.splice(index, 1)

    console.log(displayq)
    // console.log(quizQs)
 
    
  }










// function gameover() {
//     container.innerHTML = '';
// container.append(text, home, hscore)
// }


//   getquestion()
  countdown()