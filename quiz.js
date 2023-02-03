const quizData = [{
  question: 'How many letters are there in ENGLISH?',
  a: '22',
  b: '24',
  c: '25',
  d: '26',
  correct: 'd'
}, {
  question: 'Who is the current IPL captain of Chennai Super Kings team?',
  a: 'Modi',
  b: 'AR rahman',
  c: 'Vijay',
  d: 'Dhoni',
  correct: 'd'
}, {
  question: 'What one of the following stands for HTML?',
  a: 'Hypertext Markup Language',
  b: 'Hyderabad Tennis Match League',
  c: 'Himalayan Terrace Market League',
  d: 'Hindustan Training Modelling League',
  correct: 'a'
}, {
  question: 'what is the color of the Sun?',
  a: 'blue',
  b: 'white',
  c: 'yellow',
  d: 'pink',
  correct: 'c'
}]

const question = document.getElementById('question')
const button = document.querySelector('button')
const choice1 = document.getElementById('choice1')
const choice2 = document.getElementById('choice2')
const choice3 = document.getElementById('choice3')
const choice4 = document.getElementById('choice4')
const choiceEls = document.querySelectorAll('.choiceEl')
const scoreCard = document.querySelector('#scoreCard')
let i = 0;
let score = 0;
button.onclick = () => {
  answer = getSelected()
  if (answer) {
    if (answer == quizData[i].correct) {
      score++;
    }
    i++;
    if (i < quizData.length) {
      addQuestion()
    }else{
      scoreCard.innerText=`You have scored ${score} out of ${quizData.length}`
    }
  }

  addQuestion()
  getSelected()
}

function deselected() {
  choiceEls.forEach((choiceEl) => {
    choiceEl.checked = false;
  })
}

function getSelected() {
  let answer = undefined;
  choiceEls.forEach((choiceEl) => {
    if (choiceEl.checked) {
      answer = choiceEl.id
      console.log(answer)
    }
  })
  return answer;
}



addQuestion()
function addQuestion() {

    question.innerText = quizData[i].question
    choice1.innerText = quizData[i].a
    choice2.innerText = quizData[i].b
    choice3.innerText = quizData[i].c
    choice4.innerText = quizData[i].d
    deselected()
}
