const params = new URLSearchParams(window.location.search);
const guest = params.get("guest") || "Dear Guest";

document.getElementById("guestName").innerText = `Dear ${guest}`;

gsap.from(".initials", { opacity: 0, y: 30, duration: 2 });
gsap.from(".greeting", { opacity: 0, y: 20, delay: 2 });
