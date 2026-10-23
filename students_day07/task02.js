const box = document.querySelector("footer div");

box.addEventListener("click", function () {
  let name = "";

  while (!name) {
    name = prompt("What's your name?");
  }

  const confirmed = confirm(
    `Are you sure that ${name} is your name ?`
  );

  if (confirmed) {
    alert(`Hello ${name}!`);
    box.textContent = `Hello ${name}!`;
  }
});