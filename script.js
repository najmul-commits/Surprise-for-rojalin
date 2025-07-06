const SECRET_PASSWORD = "07072024";
function checkPassword(){
    const pwInput=document.getElementById("pwInput");
    const error=document.getElementById("error");
    if(pwInput.value===SECRET_PASSWORD){
        document.getElementById("password-overlay").style.display="none";
        // play audio
        const audio=document.getElementById("bgAudio");
        audio.play().catch(()=>{});
    }else{
        error.textContent="Incorrect password. Try again!";
    }
}
// Floating hearts
const heartContainer=document.getElementById("heart-container");
function createHeart(){
    const heart=document.createElement("div");
    heart.classList.add("heart");
    heart.style.left=Math.random()*100+"vw";
    heart.style.animationDuration=Math.random()*2+4+"s";
    heartContainer.appendChild(heart);
    setTimeout(()=>heart.remove(),6000);
}
setInterval(createHeart,400);
