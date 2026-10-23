const links = document.querySelectorAll("a");

links.forEach(function(link) {
    if (link.getAttribute("target") !== "_blank") {
        link.style.opacity = "0.5";
    }
});