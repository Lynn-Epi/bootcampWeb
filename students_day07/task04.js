const buttons = document.querySelectorAll("button");
const dropdown = document.querySelector("select");

let fontSize = 16;

buttons[0].addEventListener("click", function() {
    fontSize++;
    document.body.style.fontSize = fontSize + "px";
});

buttons[1].addEventListener("click", function() {
    fontSize--;
    document.body.style.fontSize = fontSize + "px";
});

dropdown.addEventListener("change", function() {
    document.body.style.backgroundColor = dropdown.value;
});