const questions = [
    {
        question: "Há quanto tempo existe vida na Terra?",
        answers: [
            { id: 1, text: "8000 anos", correct: false },
            { id: 2, text: "10000 anos", correct: false },
            { id: 3, text: "30000 anos", correct: false },
            { id: 4, text: "6000 anos", correct: true }
        ]
    },
    {
        question: "Por quanto tempo um ser humano pode viver?",
        answers: [
            { id: 1, text: "60-80 anos", correct: false },
            { id: 2, text: "60-70 anos", correct: false },
            { id: 3, text: "70-80 anos", correct: true },
            { id: 4, text: "70-90 anos", correct: false }
        ]
    },
    {
        question: "Quais as profissões militares?",
        answers: [
            { id: 1, text: "Marinha, Exército e Aeronáutica", correct: true },
            { id: 2, text: "Motorista, Piloto e Marinheiro", correct: false },
            { id: 3, text: "Encanador, Eletricista e Pedreiro", correct: false },
            { id: 4, text: "Policial, Bombeiro e Médico", correct: false }
        ]
    },
    {
        question: "Qual é o maior país da América Latina?",
        answers: [
            { id: 1, text: "Colômbia", correct: false },
            { id: 2, text: "Brasil", correct: true },
            { id: 3, text: "Argentina", correct: false },
            { id: 4, text: "Bolívia", correct: false }
        ]
    },
    {
        question: "Qual é a moeda mais forte do mundo?",
        answers: [
            { id: 1, text: "Dólar", correct: false },
            { id: 2, text: "Franco", correct: false },
            { id: 3, text: "Euro", correct: true },
            { id: 4, text: "Shekel", correct: false }
        ]
    },
    {
        question: "Qual é a nação mais influente do mundo?",
        answers: [
            { id: 1, text: "Estados Unidos", correct: true },
            { id: 2, text: "Rússia", correct: false },
            { id: 3, text: "Brasil", correct: false },
            { id: 4, text: "China", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0; 
    nextButton.innerHTML = "Próximo";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.id + ". " + answer.text; // mostra o ID
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
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

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Jogar novamente";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
