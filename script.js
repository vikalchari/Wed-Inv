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

