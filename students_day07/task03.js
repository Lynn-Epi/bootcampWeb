const output = document.querySelector("footer div");
let text = "";

document.addEventListener("keydown", function(event) {
    if (event.key.length === 1) {
        text += event.key;
        output.textContent = text.slice(-42);
    }
});