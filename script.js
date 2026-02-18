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

const flowerContainer = document.getElementById("flower-container");

function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");

  const flowers = ["🌸", "🌺", "🌼", "🌷", "💐"];
  flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];

  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = 4 + Math.random() * 6 + "s";
  flower.style.fontSize = 18 + Math.random() * 18 + "px";
  flower.style.opacity = Math.random();

  flowerContainer.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 10000);
}

setInterval(createFlower, 250);
