const paragraphs = document.querySelectorAll("p");

paragraphs.forEach(function (p) {
  p.addEventListener("mouseenter", function () {
    p.classList.add("blue");
  });

  p.addEventListener("mouseleave", function () {
    p.classList.remove("blue");
  });

  p.addEventListener("click", function () {
    p.classList.toggle("highlighted");
  });
});
