const quesJSON = [{
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris"
},
{
   question: "What is the largest planet in our solar system?",
   options: ["Earth", "Jupiter", "Mars", "Saturn"],
   correctAnswer: "Jupiter" 
},
{
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Hg"],
    correctAnswer: "Au"
},
{
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    correctAnswer: "Vatican City"
},
{
    question: "What is the largest ocean in the world?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: "Pacific Ocean"
},
{
    question: "What is the highest mountain in the world?",
    options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
    correctAnswer: "Mount Everest"
},
{
    question: "What is the largest desert in the world?",
    options: ["Sahara Desert", "Gobi Desert", "Kalahari Desert", "Arabian Desert"],
    correctAnswer: "Sahara Desert"
},
{
    question: "What is the largest country in the world by land area?",
    options: ["Russia", "Canada", "China", "United States"],
    correctAnswer: "Russia"
},
{
    question: "What is the largest animal in the world?",
    options: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale"
},  
{
    question: "What is the largest continent in the world?",
    options: ["Asia", "Africa", "North America", "Europe"],
    correctAnswer: "Asia"
}];

let score=0;
let currentQuestion = 0;
const totalScore = quesJSON.length;

    //Accessing all the elements:
    const questionEl = document.getElementById("question");
    const optionEl = document.getElementById("options");
    const scoreEl = document.getElementById("score");
    const nextEl = document.getElementById("next");
    
    showQuestion();

    next.addEventListener("click",() =>{
        scoreEl.textContent = `Score: ${score} / ${totalScore}`;
        extQuestion()
    });
    
    function showQuestion(){
       // Destructuring the object
     const{correctAnswer, options, question} = quesJSON[currentQuestion];

      //Setting question text content
    questionEl.textContent = question; 
    
    const shuffledOptions = shuffleOptions(options);
    
        //Populating the Options div with the buttons.
        shuffledOptions.forEach((option) => {
          const btn = document.createElement('button');
          btn.textContent = option;
          optionEl.appendChild(btn);
  
      // Event handling on the button:
      btn.addEventListener("click", () => {
          if(option === correctAnswer){
              score++;
          }
          else{
              score=score-0.25;
          }   
      scoreEl.textContent = `Score: ${score} / ${totalScore}`;
      nextQuestion();
          });
      });
  }

  function nextQuestion(){
    currentQuestion++;
    optionEl.textContent = '';
    if(currentQuestion>=quesJSON.length){
      questionEl.textContent = 'Quiz Completed!!';
      nextEl.remove();
    } else{
      showQuestion();
    }
  }

//Shuffling the Options
function shuffleOptions(options) {
    for (let i = options.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * i + 1);
      [options[i], options[j]] = [
        options[j],
        options[i],
      ];
    }
    return options;
  }



    