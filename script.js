// Typing effect for dialogue box
const text = "My heart is heavy with regret, and my soul doth yearn for thy forgiveness...";
let index = 0;
function typeEffect() {
    if (index < text.length) {
        document.getElementById("dialogue-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}
setTimeout(typeEffect, 1000);

// Reveal full letter smoothly
function revealLetter() {
    document.querySelector(".hidden-text").style.display = "block";
    document.querySelector("button").style.display = "none";
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}

// Create floating hearts & butterflies
setInterval(() => {
    let floatingElem = document.createElement("div");
    floatingElem.className = "floating";
    
    // Randomly choose between a heart or butterfly
    floatingElem.innerHTML = Math.random() > 0.5 ? "❤️" : "🦋";
    
    document.getElementById("floating-elements").appendChild(floatingElem);
    
    let randomX = Math.random() * window.innerWidth;
    floatingElem.style.left = `${randomX}px`;
    floatingElem.style.bottom = "0px";

    setTimeout(() => {
        floatingElem.remove();
    }, 3000);
}, 1200);
