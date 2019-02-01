(function() {
    function buildQuiz() {
      // we'll need a place to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const myQuestions = [
      {
        question: "Who is the strongest?",
        answers: {
          a: "Superman",
          b: "The Terminator",
          c: "Waluigi, obviously"
        },
        correctAnswer: "c"
      },
      {
        question: "What is the best site ever created?",
        answers: {
          a: "SitePoint",
          b: "Simple Steps Code",
          c: "Trick question; they're both the best"
        },
        correctAnswer: "c"
      },
      {
        question: "Where is Waldo really?",
        answers: {
          a: "Antarctica",
          b: "Exploring the Pacific Ocean",
          c: "Sitting in a tree",
          d: "Minding his own business, so stop asking"
        },
        correctAnswer: "d"
      }
    ];
  
    // display quiz right away
    buildQuiz();
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
  })();
  
  
          function startTimer(duration, display) {
              var start = Date.now(),
                  diff,
                  //minutes,
                  seconds;
              function timer() {
                  // get the number of seconds that have elapsed since 
                  // startTimer() was called
                  diff = duration - (((Date.now() - start) / 1000) | 0);
                  // does the same job as parseInt truncates the float
                  minutes = (diff / 60) | 0;
                  seconds = (diff % 60) | 0;
                  minutes = minutes < 10 ? "0" + minutes : minutes;
                  seconds = seconds < 10 ? "0" + seconds : seconds;
                  display.textContent = minutes + ":" + seconds;
                  if (diff <= 0) {
                      // add one second so that the count down starts at the full duration
                      // example 05:00 not 04:59
                      start = Date.now() + 1000;
                  }
              };
              // we don't want to wait a full second before the timer starts
              timer();
              setInterval(timer, 1000);
          }
          window.onload = function () {
              var timerStart = 30,
                  display = document.querySelector('#time');
              startTimer(timerStart, display);
          };