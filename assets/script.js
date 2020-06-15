// variables
const $controls = $(".controls");
const $startBtn = $("#start-btn");
const $questionWrapper = $(".questions-wrapper");
const $contQuestion = $(".question-container");
const $contAnswer = $(".answer-container");
const $contRight = $(".right-container");
const $contWrong = $(".wrong-container");
const $question = $("#question");
const $answerList = $("#answer-buttons");
const $timer = $(".timer");
let finalScore = "";
const $submitScore = $("#submitScore");
const $userInitials = $("#userInitials");
const $showScore = $("#showHighScore");
const $listScore = $(".list-highscores");
const $startOver = $("#start-again");
const $clearScore = $("#clear-highscore");

$startBtn.on("click", startGame);

$submitScore.on("click", saveScore);

$showScore.on("click", showHighScore);

$clearScore.on("click", clearScore);

$startOver.on("click", startOver);

let highScores = [];

highScores = JSON.parse(localStorage.getItem("highScores"));

if (!highScores) {
    highScores = [];
}

let timer = 100;
// $timer.text(timer);

let wrongCount = 0;

//funtion that will hide the initial screen and call the function that willl format the first question;
function startGame() {
    $controls.addClass("hide");
    $questionWrapper.removeClass("hide");
    showQuestion(0, "n");
    points();
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
        points(stop);
        finalScore = timer - (wrongCount * 10);
        console.log(finalScore);
        $(".top").addClass("hide");
        $(".final-scores").removeClass("hide");

        $(".finalScore").text(finalScore);


        return;
    }

    let quizQuestion = quizQuestions[indexQuestion];

    $question.append(quizQuestion.question);



    $.each(quizQuestion.answers, function(index, element) {

        const wrapper = $("<div class='row'>")

        const $answerButtons = $("<button class='btn btn-anwser'>");
        $answerButtons.attr("id", index);
        $answerButtons.attr("data-letter", index);
        $answerButtons.text(index + ": " + element);



        $answerList.append(wrapper.append($answerButtons));
    })

    $(".btn-anwser").on("click", function() {
        let userAnwser = ($(this).attr("data-letter"));
        console.log(userAnwser);
        checkResult(userAnwser, quizQuestion);
    });

}



function checkResult(userResponse, question) {

    if (question.correctAnswer === userResponse) {
        $contRight.removeClass("hide");
        setTimeout(function() {
            showQuestion("Y", question);
            $contRight.addClass("hide");
        }, 500);
    } else {
        $contWrong.removeClass("hide");
        setTimeout(function() {
            showQuestion("Y", question);
            $contWrong.addClass("hide");
            wrongCount++;
        }, 500);

    }
}

let points = function() {
    setInterval(function() {
        if (timer > 0) {
            timer--;
            $timer.text("time: " +
                timer);
        } else {
            clearInterval(points);
        }
    }, 1000);
}



function saveScore() {
    let iniUser = $userInitials.val();

    highScores.push({ "user": iniUser, "score": finalScore });

    console.log(highScores);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    showHighScore();


}

function showHighScore() {
    $listScore.removeClass("hide");

    if (!$controls.hasClass("hide")) {
        $controls.addClass("hide");
    }

    if (!$(".top").hasClass("hide")) {
        $(".top").addClass("hide");
    }

    if (!$(".final-scores").hasClass("hide")) {
        $(".final-scores").addClass("hide");
    }

    let listHighScore = JSON.parse(localStorage.getItem("highScores"));

    console.log(listHighScore);



    Object.keys(listHighScore).forEach(function(value, prop) {

        console.log(value, listHighScore[value].user);
        let userIni = listHighScore[value].user;
        let userScore = listHighScore[value].score;

        console.log(userIni, userScore);
        const listItem = $('<li>');
        listItem.addClass("listItem");
        listItem.text("Initials: " + userIni + " Points: " + userScore);
        console.log(userIni, userScore);
        console.log(listItem);
        $(".scoreList").append(listItem);
    })

}

function clearScore() {
    window.localStorage.clear();
    location.reload();

}

function startOver() {
    location.reload();
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
        A: "Right",
        B: "Wrong",
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