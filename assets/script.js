// variables
const $startBtn = $("#start-btn");
const $nextBtn = $("#next-btn");
const $startText = $("#start-text");
const $contQuestion = $("#question-container");
const $question = $("#question");
const $answerList = $("#answer-buttons");

$startBtn.on("click", startGame);

function startGame() {
    $startText.addClass("hide");
    $contQuestion.removeClass("hide");
    showQuestion();
}

function showQuestion() {
    const randomQuestion = quizQuestions[Math.floor(Math.random() * quizQuestions.length)];

    $question.append(randomQuestion.question);
    randomQuestion.answers.forEach(element => {


    });
}


//questions for the quiz
const quizQuestions = [{
    question: "What is the HTML tag under which one can write the JavaScript code?",
    answers: {
        A: "<javascript>",
        B: "<scripted>",
        C: "<script>",
        D: "<js>",
    },
    correctAnswer: "C"
}, {
    question: "Which of the following is the correct syntax to display “Hello World!” in an alert box using JavaScript?",
    answers: {
        A: "alertbox('Hello World!');",
        B: "msg('Hello World!');",
        C: "msgbox('Hello World!');",
        D: "alert('Hello World!');",
    },
    correctAnswer: "D"
}, {
    question: "The external JavaScript file must contain <script> tag. True or False?",
    answers: {
        A: "True",
        B: "False",
    },
    correctAnswer: "B"
}, {
    question: "Which of the following is not a reserved word in JavaScript?",
    answers: {
        A: "interface",
        B: "throws",
        C: "program",
        D: "short",
    },
    correctAnswer: "C"
}, {
    question: "In JavaScript, we do not have datatypes like integer and float. What is the function that can be used to check if the number is an integer or not?",
    answers: {
        A: "isInteger(value)",
        B: "ifInteger(value)",
        C: "Integer(value)",
        D: "ifinteger(value)",
    },
    correctAnswer: "A"
}]