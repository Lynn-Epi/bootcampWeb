const message = document.querySelector("footer div");
const link = message.querySelector("a");

const deleteBox = document.createElement("div");
const deleteButton = document.createElement("button");

deleteButton.textContent = "Delete the cookie";
deleteBox.appendChild(deleteButton);
message.parentElement.appendChild(deleteBox);

function updateDisplay() {
  const accepted = document.cookie.includes("acceptsCookies=true");

  if (accepted) {
    message.style.display = "none";
    deleteBox.style.display = "block";
  } else {
    message.style.display = "block";
    deleteBox.style.display = "none";
  }
}

link.addEventListener("click", function (event) {
  event.preventDefault();

  const date = new Date();
  date.setDate(date.getDate() + 1);

  document.cookie = "acceptsCookies=true; expires=" + date.toUTCString();
  updateDisplay();
});
deleteButton.addEventListener("click", function () {
  document.cookie = "acceptsCookies=; max-age=0; path=/";

  updateDisplay();
});
updateDisplay();
