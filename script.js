"use strict";
let toguess = Math.round(Math.random() * 20 + 1);
let highScore = localStorage.getItem("highScore")
  ? parseInt(localStorage.getItem("highScore"))
  : 0;
document.querySelector(".highscore").textContent = highScore;
let score = 20;
document.querySelector(".check").addEventListener("click", function () {
  let inputVal = Number(document.querySelector(".guess").value);
  //check if this is a number not a string or empty
  if (!inputVal) {
    document.querySelector(".message").textContent = "no number";
  }
  if (score > 1) {
    if (toguess === inputVal) {
      document.querySelector(".message").textContent = "Correct";
      document.querySelector(".number").textContent = toguess;
      document.body.style.background = "#5cb85c";
      document.querySelector(".number").style.width = "350px";
      if (highScore < score) {
        highScore = score;
        localStorage.setItem("highScore", highScore);
        document.querySelector(".highscore").textContent = highScore;
      }
    } else if (toguess > inputVal) {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "too low";
    } else if (toguess < inputVal) {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "too high";
    }
  } else {
    document.querySelector(".message").textContent = "Game Over";
    document.querySelector(".score").textContent = "0";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  toguess = Math.round(Math.random() * 20 + 1);
  score = 20;
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
});
