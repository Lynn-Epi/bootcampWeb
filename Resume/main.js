const dialog = document.getElementById("contact-form");
const button = document.querySelector(".contact-info button");

// Open the contact form
button.addEventListener("click", function () {
  dialog.showModal();
});

// Close the contact form when clicking outside
dialog.addEventListener("click", function (event) {
  if (event.target === dialog) {
    dialog.close();
  }
});
