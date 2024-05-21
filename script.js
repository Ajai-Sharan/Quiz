let questions = [
    {
        question: 'Which HTML tag is used to define an inline style?',
        choice1: '<script>',
        choice2: '<css>',
        choice3: '<style>',
        choice4: '<span>',
        answer: 3,
    },
    {
        question: 'Which property is used to change the text color in CSS?',
        choice1: 'text-color',
        choice2: 'font-color',
        choice3: 'text-style',
        choice4: 'color',
        answer: 4,
    },
    {
        question: 'Which of the following is the correct way to comment in HTML?',
        choice1: '// Comment',
        choice2: '<!-- Comment -->',
        choice3: '/* Comment */',
        choice4: '<! Comment>',
        answer: 2,
    },
];

let currentQuestionIndex = 0;
let userAnswers = [];
let realAnswers = [];

// Shuffle questions array
questions = questions.sort(() => Math.random() - 0.5);

document.addEventListener("DOMContentLoaded", function() {
    displayQuestion();

    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box, index) => {
        box.addEventListener("click", function() {
            userAnswers.push(index + 1);
            realAnswers.push(questions[currentQuestionIndex].answer);
            questions.splice(currentQuestionIndex, 1);
            
            if (questions.length > 0) {
                displayQuestion();
            } else {
                endQuiz();
            }
        });
    });
});

function displayQuestion() {
    if (questions.length === 0) return;
    
    const question = questions[currentQuestionIndex];
    document.getElementById("title").innerText = question.question;
    const choices = document.querySelectorAll(".content");
    choices[0].innerText = question.choice1;
    choices[1].innerText = question.choice2;
    choices[2].innerText = question.choice3;
    choices[3].innerText = question.choice4;

    
}



function calculateScore() {
   
    let totalScore = 0;
    
        for (let i = 0; i < userAnswers.length; i++) {
            if (userAnswers[i] === realAnswers[i]) {
                totalScore += 5; // Each correct answer scores 5 points
            }
        }
        return totalScore;
    
    }

    function endQuiz() {
        let score = calculateScore();
        localStorage.setItem('quizScore', score);
        window.location.href = "result.html";
    }
    

    




// function changeBackground(boxes, index){
//     for(let i = 0; i<boxes.length; i++){
//         if(i == index){
//             boxes[i].style.backgroundColor = 'green';
//         }
//         else{
//             boxes[i].style.backgroundColor = 'red';
//         }
//     }
// }

