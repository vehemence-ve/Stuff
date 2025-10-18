// Quote functionality
const quotes = [
    "Vehemence is the fire that lights up the soul.",
    "Passion without vehemence is like a candle without flame.",
    "Forceful determination shapes the course of destiny.",
    "Intensity of emotion drives extraordinary action.",
    "Vehemence is the language of the fiercely alive."
];
const button = document.getElementById("quote-button");
const quoteDisplay = document.getElementById("vehemence-quote");
button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.style.opacity = 0;
    setTimeout(() => {
        quoteDisplay.textContent = quotes[randomIndex];
        quoteDisplay.style.opacity = 1;
    }, 300);
});

// Blog "Read More" toggle
const readButtons = document.querySelectorAll(".read-more");
readButtons.forEach(button => {
    button.addEventListener("click", () => {
        const fullText = button.previousElementSibling.querySelector(".full-text");
        const dots = button.previousElementSibling.querySelector(".dots");
        if(fullText.style.display === "inline") {
            fullText.style.display = "none";
            dots.style.display = "inline";
            button.textContent = "Read More";
        } else {
            fullText.style.display = "inline";
            dots.style.display = "none";
            button.textContent = "Read Less";
        }
    });
});

// Animate sections on scroll
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.3 });
sections.forEach(section => observer.observe(section));
