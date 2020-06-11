// variables
const $startBtn = $("#start-btn");
const $startText = $("#start-text");
const $contQuestion = $("#question-container");
const $question = $("#question");
const $answerList = $("#answer-buttons");

$startBtn.on("click", startGame);

//funtion that will hide the initial screen and call the function that willl format the first question;
function startGame() {
    $startText.addClass("hide");
    $contQuestion.removeClass("hide");
    showQuestion(0, "n");
}

function showQuestion(newQuestion, oldQuestion) {

    let indexQuestion = '';

    if (newQuestion === 0) {
        indexQuestion = 0;
        console.log(indexQuestion);
    } else if (newQuestion === "Y") {
        $question.empty();
        $answerList.empty();
        let oldIndex = $.inArray(oldQuestion, quizQuestions);
        oldIndex++;
        console.log(oldIndex);
        indexQuestion = oldIndex;
    }

    console.log(quizQuestions.length);

    if (newQuestion === "Y" && indexQuestion > quizQuestions.length - 1) {
        console.log("end game!");
        return;
    }

    let quizQuestion = quizQuestions[indexQuestion];

    $question.append(quizQuestion.question);



    $.each(quizQuestion.answers, function(index, element) {

        const $answerButtons = $("<button class='btn btn-anwser'>");
        $answerButtons.attr("id", index);
        $answerButtons.attr("data-letter", index);
        $answerButtons.text(index + ": " + element);



        $answerList.append($answerButtons);
    })

    $(".btn-anwser").on("click", function() {
        let userAnwser = ($(this).attr("data-letter"));
        console.log(userAnwser);
        checkResult(userAnwser, quizQuestion);
    });

}



function checkResult(userResponse, question) {

    if (question.correctAnswer === userResponse) {

        $("#" + userResponse).addClass("right");
        setTimeout(function() { showQuestion("Y", question); }, 3000);
    } else {
        $("#" + userResponse).addClass("wrong");
        setTimeout(function() { showQuestion("Y", question); }, 3000);

    }
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