// Quiz modes
let currentMode = null;

// Quiz data - Danki Code questions
const dankiQuestions = [
    {
        question: "Quanto é 5 + 5?",
        answer: "10",
        type: "number"
    },
    {
        question: "Quanto é 10 + 5?",
        answer: "15",
        type: "number"
    },
    {
        question: "Quem é o CEO da danki code?",
        answer: "Guilherme",
        type: "text"
    },
    {
        question: "Quem é o instrutor do curso de c#?",
        answer: "Moises",
        type: "text"
    },
    {
        question: "Quanto é 10.55 + 5?",
        answer: "15.55",
        type: "float"
    }
];

let questions = [];
let currentQuestionIndex = 0;
let score = 0;

// Elementos do DOM
const menuSection = document.getElementById('menuSection');
const loadingSection = document.getElementById('loadingSection');
const quizHeader = document.getElementById('quizHeader');
const quizTitle = document.getElementById('quizTitle');
const questionText = document.getElementById('questionText');
const answerInput = document.getElementById('answerInput');
const submitBtn = document.getElementById('submitBtn');
const inputContainer = document.getElementById('inputContainer');
const optionsContainer = document.getElementById('optionsContainer');
const feedback = document.getElementById('feedback');
const currentQuestionSpan = document.getElementById('currentQuestion');
const totalQuestionsSpan = document.getElementById('totalQuestions');
const progressBar = document.getElementById('progressBar');
const quizContent = document.getElementById('quizContent');
const resultSection = document.getElementById('resultSection');
const finalScore = document.getElementById('finalScore');
const scoreMessage = document.getElementById('scoreMessage');
const restartBtn = document.getElementById('restartBtn');
const dankiModeBtn = document.getElementById('dankiModeBtn');
const generalModeBtn = document.getElementById('generalModeBtn');

// Event listeners para seleção de modo
dankiModeBtn.addEventListener('click', () => startQuiz('danki'));
generalModeBtn.addEventListener('click', () => startQuiz('general'));

// Iniciar quiz baseado no modo
async function startQuiz(mode) {
    currentMode = mode;
    menuSection.classList.add('hidden');

    if (mode === 'danki') {
        questions = dankiQuestions;
        quizTitle.textContent = '🎓 Quiz Danki Code';
        initQuiz();
    } else {
        quizTitle.textContent = '🌍 Quiz Geral';
        await loadAPIQuestions();
    }
}

// Carregar perguntas da API
async function loadAPIQuestions() {
    loadingSection.classList.remove('hidden');

    try {
        const response = await fetch('https://opentdb.com/api.php?amount=5&type=multiple');
        const data = await response.json();

        if (data.response_code === 0) {
            questions = data.results.map(q => ({
                question: decodeHTML(q.question),
                correctAnswer: decodeHTML(q.correct_answer),
                options: shuffleArray([
                    decodeHTML(q.correct_answer),
                    ...q.incorrect_answers.map(a => decodeHTML(a))
                ]),
                type: 'multiple'
            }));

            loadingSection.classList.add('hidden');
            initQuiz();
        } else {
            throw new Error('Erro ao carregar perguntas');
        }
    } catch (error) {
        loadingSection.classList.add('hidden');
        alert('Erro ao carregar perguntas da API. Tente novamente!');
        returnToMenu();
    }
}

// Decodificar HTML entities
function decodeHTML(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
}

// Embaralhar array
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Inicializar quiz
function initQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizHeader.classList.remove('hidden');
    quizContent.classList.remove('hidden');
    totalQuestionsSpan.textContent = questions.length;
    loadQuestion();
}

// Carregar pergunta atual
function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        questionText.textContent = question.question;
        feedback.classList.remove('show', 'correct', 'incorrect');
        feedback.textContent = '';

        // Atualizar contador e barra de progresso
        currentQuestionSpan.textContent = currentQuestionIndex + 1;
        const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
        progressBar.style.width = progress + '%';

        // Mostrar input ou opções baseado no tipo
        if (question.type === 'multiple') {
            inputContainer.classList.add('hidden');
            optionsContainer.classList.remove('hidden');
            renderOptions(question.options);
        } else {
            inputContainer.classList.remove('hidden');
            optionsContainer.classList.add('hidden');
            answerInput.value = '';
            answerInput.focus();
        }
    } else {
        showResults();
    }
}

// Renderizar opções de múltipla escolha
function renderOptions(options) {
    optionsContainer.innerHTML = '';
    options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.addEventListener('click', () => selectOption(btn, option));
        optionsContainer.appendChild(btn);
    });
}

// Selecionar opção
function selectOption(btn, selectedAnswer) {
    const question = questions[currentQuestionIndex];
    const allOptions = optionsContainer.querySelectorAll('.option-btn');

    // Desabilitar todas as opções
    allOptions.forEach(opt => opt.disabled = true);

    // Marcar resposta selecionada
    btn.classList.add('selected');

    // Verificar se está correta
    const isCorrect = selectedAnswer === question.correctAnswer;

    if (isCorrect) {
        score++;
        btn.classList.add('correct');
        showFeedback('✅ Correto!', true);
    } else {
        btn.classList.add('incorrect');
        // Mostrar resposta correta
        allOptions.forEach(opt => {
            if (opt.textContent === question.correctAnswer) {
                opt.classList.add('correct');
            }
        });
        showFeedback(`❌ Incorreto! A resposta correta é: ${question.correctAnswer}`, false);
    }

    // Avançar para próxima pergunta
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 2000);
}

// Verificar resposta (para perguntas de texto/número)
function checkAnswer() {
    const userAnswer = answerInput.value.trim();

    if (!userAnswer) {
        showFeedback('Por favor, digite uma resposta!', false);
        setTimeout(() => {
            feedback.classList.remove('show');
        }, 1500);
        return;
    }

    const question = questions[currentQuestionIndex];
    let isCorrect = false;

    if (question.type === 'number') {
        isCorrect = parseInt(userAnswer) === parseInt(question.answer);
    } else if (question.type === 'float') {
        const userFloat = parseFloat(userAnswer);
        const correctFloat = parseFloat(question.answer);
        isCorrect = Math.abs(userFloat - correctFloat) < 0.01;
    } else {
        isCorrect = userAnswer === question.answer;
    }

    if (isCorrect) {
        score++;
        showFeedback('✅ Correto!', true);
    } else {
        showFeedback(`❌ Incorreto! A resposta correta é: ${question.answer}`, false);
    }

    // Desabilitar input e botão temporariamente
    answerInput.disabled = true;
    submitBtn.disabled = true;

    // Avançar para próxima pergunta
    setTimeout(() => {
        answerInput.disabled = false;
        submitBtn.disabled = false;
        currentQuestionIndex++;
        loadQuestion();
    }, 1500);
}

// Mostrar feedback
function showFeedback(message, isCorrect) {
    feedback.textContent = message;
    feedback.classList.remove('correct', 'incorrect');
    feedback.classList.add(isCorrect ? 'correct' : 'incorrect', 'show');
}

// Mostrar resultados finais
function showResults() {
    quizHeader.classList.add('hidden');
    quizContent.classList.add('hidden');
    resultSection.classList.remove('hidden');

    finalScore.textContent = score;

    // Mensagem personalizada baseada na pontuação
    let message = '';
    const percentage = (score / questions.length) * 100;

    if (percentage === 100) {
        message = '🎉 Perfeito! Você acertou todas as perguntas!';
    } else if (percentage >= 80) {
        message = '👏 Muito bem! Excelente desempenho!';
    } else if (percentage >= 60) {
        message = '👍 Bom trabalho! Continue praticando!';
    } else if (percentage >= 40) {
        message = '💪 Você pode melhorar! Tente novamente!';
    } else {
        message = '📚 Estude mais e tente novamente!';
    }

    scoreMessage.textContent = message;
}

// Voltar ao menu
function returnToMenu() {
    menuSection.classList.remove('hidden');
    loadingSection.classList.add('hidden');
    quizHeader.classList.add('hidden');
    quizContent.classList.add('hidden');
    resultSection.classList.add('hidden');
    currentMode = null;
}

// Event listeners
submitBtn.addEventListener('click', checkAnswer);

answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});

restartBtn.addEventListener('click', returnToMenu);
