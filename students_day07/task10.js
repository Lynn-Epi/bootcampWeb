
const input = document.getElementById("listItem");
const button = document.querySelector("button");

button.addEventListener("click", function() {
    const text = input.value;

    const newDiv = document.createElement("div");
    newDiv.textContent = text;

    input.after(newDiv);

    input.value = "";
});
