const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(6, 6);
ctx.lineTo(14, 10);
ctx.lineTo(6, 14);
ctx.closePath();

ctx.fillStyle = "white";
ctx.fill();
ctx.strokeStyle = "white";
ctx.lineWidth = 1;
ctx.stroke();

const audio = document.querySelector("audio");
const buttons = document.querySelectorAll("button");

// audio.src = "https://universal-soundbank.com/sounds/13631.mp3";

canvas.addEventListener("click", function() {
    audio.play();
});

buttons[0].addEventListener("click", function() {
    audio.pause();
});

buttons[1].addEventListener("click", function() {
    audio.pause();
    audio.currentTime = 0;
});