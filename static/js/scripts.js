function init() {
    showQuestion();
}

let questions = quiz_html;
let currentQuestion = 0;
let correctAnswers = 0;
let givenAnswers = 0;
let AUDIO_SUCCESS = new Audio('static/sounds/success.mp3');
let AUDIO_FAIL = new Audio('static/sounds/wrong.mp3');

function showQuestion() {
    progress();
    if (currentQuestion >= questions.length) {
        finishQuiz();
    } else {
        let question = questions[currentQuestion];
        document.getElementById("question").innerHTML = question.question;
        document.getElementById("answer-1").innerHTML = question.option1;
        document.getElementById("answer-2").innerHTML = question.option2;
        document.getElementById("answer-3").innerHTML = question.option3;
        document.getElementById("answer-4").innerHTML = question.option4;
        document.getElementById("quiz-length").innerHTML = questions.length;
        document.getElementById("current-question").innerHTML = currentQuestion + 1;
        document.getElementById("next-button").disabled = true;
    }
}

function answer(option) {
    if (givenAnswers !== 0) {
        return;
    }
    let question = questions[currentQuestion];
    if (option === question.answer) {
        AUDIO_SUCCESS.play();
        document.getElementById("answer-" + option).classList.add("correct");
        correctAnswers++;
    } else {
        AUDIO_FAIL.play();
        document.getElementById("answer-" + option).classList.add("wrong");
        document.getElementById("answer-" + question.answer).parentNode.classList.add("correct-highlight");
    }
    document.getElementById("next-button").disabled = false;
    givenAnswers = option;
    if (currentQuestion === questions.length - 1) {
        document.getElementById("next-button").innerHTML = "Ergebnisse anzeigen";
    }
}

function nextQuestion() {
    currentQuestion++;
    cleanUp();
    showQuestion();
    progress();
    givenAnswers = 0;
}

function progress() {
    let progress = currentQuestion / questions.length * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
    document.getElementById("progress-bar").innerHTML = Math.round(progress) + "%";
}

function cleanUp() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById("answer-" + i).classList.remove("correct");
        document.getElementById("answer-" + i).classList.remove("wrong");
        document.getElementById("answer-" + i).parentNode.classList.remove("correct-highlight");
    }
}

function finishQuiz() {
    document.getElementById("end-screen").style = '';
    document.getElementById("question-body").style = "display: none";
    document.getElementById("correct-answers").innerHTML = correctAnswers;
    document.getElementById("total-questions").innerHTML = questions.length;
    document.getElementById("image").src = "static/logos/trophy.png";
    document.getElementById("image").classList.remove("card-img-top");
    document.getElementById("image").classList.add("card-img-top-win");
}

function restartQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    document.getElementById("end-screen").style = "display: none";
    document.getElementById("question-body").style = "";
    document.getElementById("image").src = "static/logos/question-mark.png";
    document.getElementById("image").classList.remove("card-img-top-win");
    document.getElementById("image").classList.add("card-img-top");
    document.getElementById("next-button").innerHTML = "Weiter";
    showQuestion();
}