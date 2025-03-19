const question = [
    {
        question: "What is the capital city of Australia?",
        answer: [
            { text: "Sydney", correct: false },
            { text: "Canberra", correct: true },
            { text: "Melbourne", correct: false },
            { text: "Brisbane", correct: false },
        ]
    },
    {
        question: 'Who wrote the play "Romeo and Juliet"?',
        answer: [
            { text: " William Shakespeare", correct: true },
            { text: "Jane Austen", correct: false },
            { text: "Charles Dickens", correct: false },
            { text: "Mark Twain", correct: false },
        ]
    },
    {
        question: "In which year did the Titanic sink?",
        answer: [
            { text: "1912", correct: true },
            { text: "1920", correct: false },
            { text: "1905", correct: false },
            { text: "1931", correct: false },
        ]
    },
    {
        question: 'Which planet is known as the "Red Planet"',
        answer: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false },
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answer: [
            { text: "Au", correct: true },
            { text: "Ag", correct: false },
            { text: "Fe", correct: false },
            { text: "Hg", correct: false },
        ]
    },
];

const questionElement = document.querySelector(".question")
const answerButtons = document.querySelector(".answer-buttons")
const btnElement = document.querySelector(".btn")

let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    btnElement.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("button");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    })
    function resetState() {
        btnElement.style.display = "none";
        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }
    function selectAnswer(e) {
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";

        if (isCorrect) {
            selectedBtn.classList.add("correct");
            score++;
        } else {
            selectedBtn.classList.add("incorrect");
        }

        Array.from(answerButtons.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add("correct");
            }
            button.disabled = true;
        });

        btnElement.style.display = "block";
    }

}
function resetState() {
    btnElement.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function showScore() {
    resetState();
    questionElement.innerHTML = `You Scored ${score} Out Of ${question.length}!`;
    btnElement.innerHTML = "Play Again";
    btnElement.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < question.length) {
        showQuestion();
    }
    else {
        showScore();
    }

}

btnElement.addEventListener("click", () => {
    if (currentQuestionIndex < question.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
})

startQuiz();
