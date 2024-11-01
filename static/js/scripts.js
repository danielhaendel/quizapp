let questions = quiz_css;
let currentQuestion = 0;
let correctAnswers = 0;
let givenAnswers = 0;
let AUDIO_SUCCESS = new Audio('static/sounds/success.mp3');
let AUDIO_FAIL = new Audio('static/sounds/wrong.mp3');

function chooseQuiz(quiz) {
    questions = quiz;
    showQuestion();
}

function showQuestion() {
    document.getElementById("start-screen").style = "display: none";
    document.getElementById("question-body").style = "";
    document.getElementById("progress-bar-div").classList.remove("d-none");
    progress();
    if (currentQuestion >= questions.length) {
        finishQuiz();
    } else {
        showNextQuestion();
    }
}

function answer(option) {
    if (givenAnswers !== 0) {
        return;
    }
    let question = questions[currentQuestion];
    if (option === question.answer) {
        answerCheck(1, option, question);
    } else {
        answerCheck(0, option, question);
    }
    if (currentQuestion === questions.length - 1) {
        document.getElementById("next-button").innerHTML = "Ergebnisse anzeigen";
    }
}

function answerCheck(answer, option, question) {
    if (answer === 1) {
        AUDIO_SUCCESS.play();
        document.getElementById("answer-" + option).classList.add("correct");
        correctAnswers++;
    } else {
        AUDIO_FAIL.play();
        document.getElementById("answer-" + option).classList.add("wrong");
        document.getElementById("answer-" + question.answer).parentNode.classList.add("correct-highlight");
    }
    givenAnswers = option;
    document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    cleanUp();
    showQuestion();
    progress();
    givenAnswers = 0;
}

function showNextQuestion() {
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
    document.getElementById("question-body").style = "display: none";
    document.getElementById("start-screen").style = "";
    document.getElementById("progress-bar-div").classList.add("d-none");
    document.getElementById("image").src = "static/logos/question-mark.png";
    document.getElementById("image").classList.remove("card-img-top-win");
    document.getElementById("image").classList.add("card-img-top");
    document.getElementById("next-button").innerHTML = "Weiter";
}