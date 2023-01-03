const questions = [
  {
    id: 1,
    question: "How old is Hiccup in the first film, ROB, DOB?",
    options: ['15', '18-20', '20', '21', '30'],
    correctAnswer: 0
  },
  {
    id: 2,
    question: "How old is Hiccup in the DOTDR, RTTE?",
    options: ['15', '18-20', '20', '21', '30'],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "How old is Hiccup in the second film?",
    options: ['15', '18-20', '20', '21', '30'],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "How old is Hiccup in the third film?",
    options: ['15', '18-20', '20', '21', '30'],
    correctAnswer: 3
  },
  {
    id: 5,
    question: "How old is Hiccup in the third film epilogue, Homecoming?",
    options: ['15', '18-20', '20', '21', '30'],
    correctAnswer: 4
  }
];
let questionNumber = 0;
const ROBDOM = document.getElementById("ROBDOM");
function createQuestion(number) {
  const para = document.createElement("p");
  const node = document.createTextNode(questions[number].question);
  para.appendChild(node);
  return para;
}
 
 
ROBDOM.appendChild(createQuestion(0));
 
;
const DOTDRRTTE = document.getElementById("DOTDRRTTE");
 
 
DOTDRRTTE.appendChild(createQuestion(1));
 
;
const second = document.getElementById("DOTDRRTTE");
 
 
second.appendChild(createQuestion(2));
