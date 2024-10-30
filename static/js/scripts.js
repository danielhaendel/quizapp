function init() {
    showQuestion();
}

let currentQuestion = 0;
let correctAnswers = 0;

function showQuestion() {
    if (currentQuestion >= questions.length) {
        document.getElementById("end-screen").style = '';
        document.getElementById("question-body").style = "display: none";
        document.getElementById("correct-answers").innerText = correctAnswers;
        document.getElementById("total-questions").innerText = questions.length;
    } else {
        let question = questions[currentQuestion];
        document.getElementById("question").innerText = question.question;
        document.getElementById("answer-1").innerText = question.option1;
        document.getElementById("answer-2").innerText = question.option2;
        document.getElementById("answer-3").innerText = question.option3;
        document.getElementById("answer-4").innerText = question.option4;
        document.getElementById("quiz-length").innerHTML = questions.length;
        document.getElementById("current-question").innerHTML = currentQuestion + 1;
        document.getElementById("next-button").disabled = true;
    }
}

function answer(option) {
    let question = questions[currentQuestion];
    if (option === question.answer) {
        document.getElementById("answer-" + option).classList.add("correct");
        correctAnswers++;
    } else {
        document.getElementById("answer-" + option).classList.add("wrong");
        document.getElementById("answer-" + question.answer).parentNode.classList.add("correct-highlight");
    }
    document.getElementById("next-button").disabled = false;
    if (currentQuestion === questions.length - 1) {
        document.getElementById("next-button").innerText = "Ergebnisse anzeigen";
    }
}

function nextQuestion() {
    currentQuestion++;
    cleanUp();
    showQuestion();
}

function cleanUp() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById("answer-" + i).classList.remove("correct");
        document.getElementById("answer-" + i).classList.remove("wrong");
        document.getElementById("answer-" + i).parentNode.classList.remove("correct-highlight");
    }
}

function restartQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    document.getElementById("end-screen").style = "display: none";
    document.getElementById("question-body").style = "";
    showQuestion();
}