const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const resultDisplay = document.querySelector(".result");
let score = 0;
let calcScore = 0;
let maxScore = correctAnswers.length;
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score++;
    }
  });

  calcScore = (score / maxScore) * 100;

  resultDisplay.classList.remove("d-none");
  scroll(0, 0);

  let counterScore = 0;
  const countingScore = setInterval(() => {
    resultDisplay.querySelector("span").textContent = `${counterScore}%`;
    if (counterScore === calcScore) {
      clearInterval(counterScore);
    } else {
      counterScore++;
    }
  }, 10);
});
