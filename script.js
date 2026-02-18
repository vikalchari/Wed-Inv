document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  const guest =
    params.get("guest")
      ? decodeURIComponent(params.get("guest"))
      : "Anish & Family";

  const guestEl = document.getElementById("guestName");

  if (guestEl) {
    guestEl.textContent = `Dear ${guest}`;
    guestEl.style.opacity = "1";
  }

  gsap.from(".initials", {
    opacity: 0,
    y: 30,
    duration: 2
  });

  gsap.from(".greeting", {
    opacity: 0,
    y: 20,
    delay: 1.5,
    duration: 1.5
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const flowerContainer = document.getElementById("flower-container");

  function createFlower() {
    const flower = document.createElement("div");
    flower.className = "flower";

    const emojis = ["🌸", "🌹","🌺", "🌼", "🌷", "💐"];
    flower.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    flower.style.left = Math.random() * 100 + "vw";
    flower.style.fontSize = 16 + Math.random() * 24 + "px";
    flower.style.opacity = Math.random();
    flower.style.animationDuration = 5 + Math.random() * 5 + "s";

    flowerContainer.appendChild(flower);

    setTimeout(() => {
      flower.remove();
    }, 10000);
  }

  setInterval(createFlower, 200);
});

document.addEventListener("DOMContentLoaded", function () {

  // 🔥 SET YOUR WEDDING DATE HERE
  // Format: new Date(YEAR, MONTH-1, DAY, HOUR, MINUTE)
  const weddingDate = new Date(2027, 1, 14, 10, 0).getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) return;

    document.getElementById("days").innerText =
      Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("hours").innerText =
      Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("minutes").innerText =
      Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("seconds").innerText =
      Math.floor((distance % (1000 * 60)) / 1000);
  }

  updateCountdown(); // run once immediately
  setInterval(updateCountdown, 1000);
});
