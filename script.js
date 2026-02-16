alert("JS is running");

const params = new URLSearchParams(window.location.search);
const guest = params.get("guest") || "Anish & Family";

const guestEl = document.getElementById("guestName");

if (guestEl) {
  guestEl.textContent = `Dear ${guest}`;
} else {
  console.error("guestName element not found");
}

gsap.from(".initials", {
  opacity: 0,
  y: 30,
  duration: 2
});

gsap.from(".greeting", {
  opacity: 0,
  y: 20,
  delay: 2
});
