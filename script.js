
const now = new Date();
const unlockDate = new Date("2025-07-07T00:00:00");

if (now < unlockDate) {
  const countdownElement = document.getElementById("countdown");
  const interval = setInterval(() => {
    const currentTime = new Date();
    const diff = unlockDate - currentTime;

    if (diff <= 0) {
      clearInterval(interval);
      document.getElementById("lock-screen").style.display = "none";
      document.getElementById("password-screen").style.display = "block";
    } else {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      countdownElement.innerHTML = `Time left: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  }, 1000);
} else {
  document.getElementById("lock-screen").style.display = "none";
  document.getElementById("password-screen").style.display = "block";
}

function checkPassword() {
  const password = document.getElementById("password").value;
  if (password === "iloverojaline") {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  } else {
    document.getElementById("error").textContent = "Oops! Wrong password 🙈";
  }
}
