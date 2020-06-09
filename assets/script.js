const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
let shuffledQuestions, currentQuestionIndex
const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")


startButton.addEventListener("click", startGame);

function startGame() {
    startButton.classList.add("hide");
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide");
    setNextQuestion()
}

function setNextQuestion() {
    resetState();
    showQuestion();
}

function showQuestion() {
    shuffledQuestions = questions[Math.floor(Math.random() * questions.length)];

    questionElement.innerText = shuffledQuestions.question;
    shuffledQuestions.answers.forach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtons.appendChild(button);
    })
}

function resetState() {
    nextButton.classList.add("hide");
    // while (answerButtons.childElementCount > 0) {
    //     answerButtons.removeChild();
    // }

}

function selectAnswer(e) {

}

const questions = [{
        question: "What is the HTML tag under which one can write the JavaScript code?",
        answers: [
            { text: "<javascript>", correct: false },
            { text: "<scripted>", correct: false },
            { text: "<script>", correct: true },
            { text: "<js>", correct: false }
        ]
    },
    {
        question: "Which of the following is the correct syntax to display “Hello World!” in an alert box using JavaScript?",
        answers: [
            { text: "alertbox('Hello World!');", correct: false },
            { text: "msg('Hello World!');", correct: false },
            { text: "msgbox('Hello World!');", correct: false },
            { text: "alert('Hello World!');", correct: true }
        ]
    },
    {
        question: "The external JavaScript file must contain <script> tag. True or False?",
        answers: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ]
    },
    {
        question: "Which of the following is not a reserved word in JavaScript?",
        answers: [
            { text: "interface", correct: false },
            { text: "throws", correct: false },
            { text: "program", correct: true },
            { text: "short", correct: false }
        ]
    },
    {
        question: "In JavaScript, we do not have datatypes like integer and float. What is the function that can be used to check if the number is an integer or not?",
        answers: [
            { text: "isInteger(value)", correct: true },
            { text: "ifInteger(value)", correct: false },
            { text: "Integer(value)", correct: false },
            { text: "ifinteger(value)", correct: false }
        ]
    }
];