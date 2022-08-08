//constants
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));



// keeps users from answering before things are loaded
let acceptingAnswers = false;

//variables
let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


// hard coded questions
let questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript??',
        choice1: '<script>',
        choice2: '<javascript>',
        choice3: '<js>',
        choice4: '<scripting>',
        answer: 1,
    },
    {
        question:
            "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choice1: "<script href='xxx.js'>",
        choice2: "<script name='xxx.js'>",
        choice3: "<script src='xxx.js'>",
        choice4: "<script file='xxx.js'>",
        answer: 3,
    },
    {
        question: " How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4,
    },
];

const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 3;


// start game function with score at 0 calls to getNewQuestion to display questions/answers
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuestions.length == 0 || questionCounter >= MAX_QUESTIONS){
        return window.location.assign("/gameOver.HTML");
    }
    // displays question
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    console.log

    // displays answers
    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];

    });

    //splices questions so they are not reused
    availableQuestions.splice(questionIndex, 1);
    
    //allows answer to be selected
    acceptingAnswers= true;
}


    //event listeners for each question
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number']

        getNewQuestion();
    })
})

startGame ();