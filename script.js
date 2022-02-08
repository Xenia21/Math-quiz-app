const quizData = [
    {
        question: 'What is four-fifths as a decimal?',
        a: '1.2',
        b: '0.6',
        c: '0.8',
        d: '0.4',
        correct: 'c',
    }, {
        question: 'How many months are there in twelve years?',
        a: '114',
        b: '144',
        c: '121',
        d: '120',
        correct: 'b',
    }, {
        question: 'What is 3 - 7 x 4 = ?',
        a: '-25',
        b: '-16',
        c: '25',
        d: '16',
        correct: 'a',
    }, {
        question: 'Which prime number is closest to 100?',
        a: '103',
        b: '91',
        c: '99',
        d: '101',
        correct: 'd',
    }, {
        question: 'What is the value of Pi if rounded to three decimal places?',
        a: '3.141',
        b: '3.142',
        c: '3.143',
        d: '3.144',
        correct: 'b'
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly on ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
