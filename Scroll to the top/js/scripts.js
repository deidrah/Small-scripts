function createButton() {
    const button = document.createElement("button");
    button.classList.add("backToTop", "hidden");
    button.textContent = "Back to the top";
    document.body.appendChild(button);
    return button;
}

var button = createButton();

function animateScroll() {
    if (window.scrollY > 0) {
        window.scrollBy(0, -5);
        setTimeout(animateScroll, 0.01);
    }
}

button.addEventListener("click", function(e) {
    e.stopPropagation();
    animateScroll();
}, false);

window.addEventListener("scroll", function(e) {
    if (window.scrollY >= 100) {
        button.classList.remove("hidden");
    } else {
        button.classList.add("hidden");
    }
}, false);