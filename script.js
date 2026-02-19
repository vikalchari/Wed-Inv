document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     GUEST NAME
  =============================== */
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




  

  /* ===============================
   PERSONAL LETTER GUEST NAME
=============================== */
const letterGuest = document.getElementById("letterGuest");

if (letterGuest) {
  letterGuest.textContent = `Dear ${guest},`;
}


  gsap.from(".greeting", {
    opacity: 0,
    y: 20,
    delay: 0.5,
    duration: 1.5
    
  });

/*gsap.from(".name-wrapper h2", {
  opacity: 0,
  scale: 0.8,
  duration: 1.8,
  stagger: 0.4,
  ease: "power3.out",
  delay: 0.6
});

gsap.from(".heart", {
  opacity: 0,
  scale: 0,
  duration: 1,
  ease: "back.out(1.7)",
  delay: 1.2
});*/


  gsap.fromTo(".letter-card",
    { scaleY: 0, opacity: 0 },
    {
      scaleY: 1,
      opacity: 1,
      duration: 1.8,
      ease: "power3.out",
      delay: 0.3
    }
  );


  

/* ===============================
   FLOWER FALL (STOP ABOVE LETTER)
=============================== */


const flowerContainer = document.getElementById("flower-container");
const letterSection = document.querySelector(".letter-section");

function createFlower() {
  if (!flowerContainer || !letterSection) return;

  const flower = document.createElement("div");
  flower.className = "flower";
  const emojis = ["🌸", "🌹", "🌺", "🌼", "🌷", "💐"];
  flower.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  // get letter section top relative to viewport
  const letterRect = letterSection.getBoundingClientRect();
  const stopPx = letterRect.top - 20; // stop a little above

  flower.style.left = Math.random() * 100 + "vw";
  flower.style.fontSize = 18 + Math.random() * 22 + "px";
  flower.style.opacity = Math.random();

  flowerContainer.appendChild(flower);

  flower.animate(
    [
      { transform: "translateY(0) rotate(0deg)", opacity: 1 },
      { transform: `translateY(${stopPx}px) rotate(360deg)`, opacity: 0 }
    ],
    {
      duration: 7000 + Math.random() * 3000,
      easing: "linear",
      fill: "forwards"
    }
  );

  setTimeout(() => flower.remove(), 12000);
}

setInterval(createFlower, 220);







  /* ===============================
     COUNTDOWN TIMER
  =============================== */
  const weddingDate = new Date(2027, 1, 14, 10, 0).getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const diff = weddingDate - now;
    if (diff <= 0) return;

    document.getElementById("days").textContent =
      Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("hours").textContent =
      Math.floor((diff / (1000 * 60 * 60)) % 24);

    document.getElementById("minutes").textContent =
      Math.floor((diff / (1000 * 60)) % 60);

    document.getElementById("seconds").textContent =
      Math.floor((diff / 1000) % 60);
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

});



