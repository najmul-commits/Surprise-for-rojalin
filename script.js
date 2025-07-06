// Change this to your desired password
const SECRET_PASSWORD = "07072024";

function checkPassword() {
    const pwInput = document.getElementById("pwInput");
    const error = document.getElementById("error");
    if (pwInput.value === SECRET_PASSWORD) {
        document.getElementById("password-overlay").style.display = "none";
        // Try to play audio (user gesture occurred)
        const audio = document.getElementById("bgAudio");
        if (audio) {
            audio.play().catch(() => {
                // Autoplay might still fail; show a small prompt
                console.log("Autoplay prevented. User needs to tap to start music.");
            });
        }
    } else {
        error.textContent = "Incorrect password. Try again!";
    }
}

// Floating hearts generator
const heartContainer = document.getElementById("heart-container");
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 4 + "s";
    heartContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 400);
