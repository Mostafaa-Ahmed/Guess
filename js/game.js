//
const Again = document.querySelector(".again");
const Num = document.querySelector(".number");
const Guess = document.querySelector(".guess");
const Check = document.querySelector(".check");
const Message = document.querySelector(".message");
const Score = document.querySelector(".score");
const HighScore = document.querySelector(".highscore");
let SecretNumber = Math.trunc(Math.random() * 20) + 1;
const Body = document.querySelector("body");
let ScoreDecrese = 20;
let High = 0;

Check.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    Message.textContent = "❌ No number";
  } else if (guess === SecretNumber) {
    Message.textContent = "🏆 Congratiolaion Number";
    Num.textContent = SecretNumber;
    Body.style.backgroundColor = "#60b347";
    Num.style.width = "30rem";
    if (ScoreDecrese > High) {
      High = ScoreDecrese;
      HighScore.textContent = High;
    }
  } else if (guess !== SecretNumber) {
    if (ScoreDecrese > 1) {
      Message.textContent = guess > SecretNumber ? "📈Too High" : "📉Too Low";
      ScoreDecrese--;
      Score.textContent = ScoreDecrese;
    } else {
      Message.textContent = "💥You lost The Game";
      Score.textContent = 0;
      Body.style.backgroundColor = "Red";
    }
  }
});

Again.addEventListener("click", function () {
  ScoreDecrese = 20;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  Num.textContent = "?";
  Num.style.width = "15rem";
  Guess.value = "";
  Message.textContent = "Start guessing...";
  Score.textContent = ScoreDecrese;
  Body.style.backgroundColor = "#222";
});
