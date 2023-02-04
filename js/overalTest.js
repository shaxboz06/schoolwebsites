const quizQuestions = [
    {
        question: "The benefits of the Object Orientation are?",
        a: "Saturation",
        b: "Polymorphism",
        c: "Inheritance",
        d: "flexibility",
        correct: "d",

    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    
    {
        question: "What does <a href=> stand for?",
        a: "Anchor tag",
        b: "Linker tag",
        c: "Amplify tag",
        d: "Page link tag",
        correct: "a"

    },

    {
        question: "Who is the best youtuber",
        a: "Codemyhobby",
        b: "Travesy Media",
        c: "Freecodecamp",
        d: "Telusko",
        correct: "a",
    }
];

const quiz = document.getElementById('quiz-app')
const answerOpt = document.querySelectorAll('.answer')
const questionOpt = document.getElementById('questionaire')
const a_text = document.getElementById('a_answer')
const b_text = document.getElementById('b_answer')
const c_text = document.getElementById('c_answer')
const d_text = document.getElementById('d_answer')
const submitBtn = document.getElementById('submit')
let currentQuestion = 0
let score = 0
loadQuestion()
function loadQuestion(){
    deselectAnswers()
    const currentQuestionData = quizQuestions[currentQuestion]
    questionOpt.innerText = currentQuestionData.question
    a_text.innerText = currentQuestionData.a
    b_text.innerText = currentQuestionData.b
    c_text.innerText = currentQuestionData.c
    d_text.innerText = currentQuestionData.d
}
function deselectAnswers(){
    answerOpt.forEach(answerEL => answerEL.checked = false)
}

function getSelectedOpt(){
    let answer
    answerOpt.forEach(answerEL => {
        if(answerEL.checked) {
            answer = answerEL.id
        }
    })
    return answer
}

// If the selected answer is equal to the current quiz answe, increase score by 1
submitBtn.addEventListener('click', () => {
    const answer = getSelectedOpt()
    if(answer) {
        if(answer === quizQuestions[currentQuestion].correct){
            score++
        }
        currentQuestion++
        if(currentQuestion < quizQuestions.length){
            loadQuestion()
        } else{
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizQuestions.length} questions correctly!</h2>
            <button class="btn" onclick ="location.reload()">Reload</button>`
        }
    }
})