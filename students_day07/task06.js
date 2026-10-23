const square = document.querySelector("canvas");
const output = document.querySelectorAll("footer > div")[1];

let dragging = false;
let lastX = 0;
let lastY = 0;
let x = 0;
let y = 0;

square.addEventListener("mousedown", function (event) {
  dragging = true;
  lastX = event.clientX;
  lastY = event.clientY;
});

document.addEventListener("mousemove", function (event) {
  if (dragging) {
    x += event.clientX - lastX;
    y += event.clientY - lastY;

    square.style.transform = `translate(${x}px, ${y}px)`;
    output.textContent = `New coordinates => {x:${Math.round(x)}, y:${Math.round(y)}}`;

    lastX = event.clientX;
    lastY = event.clientY;
  }
});

document.addEventListener("mouseup", function () {
  dragging = false;
});
