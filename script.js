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
   FLOWER FALL — STOP BEFORE LETTER
=============================== */


const flowerContainer = document.getElementById("flower-container");
const letterCard = document.querySelector(".letter-card");

function createFlower() {
  if (!flowerContainer || !letterCard) return;

  const flower = document.createElement("div");
  flower.className = "flower";

  const emojis = ["🌸", "🌹", "🌺", "🌼", "🌷", "💐"];
  flower.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  // Get absolute position of the letter card from top of document
  const letterY = letterCard.getBoundingClientRect().top + window.scrollY;

  // Now convert that into viewport-relative coordinate for a fixed container
  const stopY = Math.max(letterY - window.scrollY - 80, 0);

  flower.style.left = Math.random() * window.innerWidth + "px";
  flower.style.fontSize = 14 + Math.random() * 24 + "px";
  flower.style.opacity = Math.random();

  flowerContainer.appendChild(flower);

  flower.animate(
    [
      { transform: "translateY(-60px) rotate(0deg)", opacity: 1 },
      { transform: `translateY(${stopY}px) rotate(360deg)`, opacity: 0 }
    ],
    {
      duration: 6000 + Math.random() * 4000,
      easing: "linear",
      fill: "forwards"
    }
  );

  setTimeout(() => flower.remove(), 12000);
}

setInterval(createFlower, 240);





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


  /* ===============================
     Event box button============================== */

/*document.querySelectorAll('.event-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.classList.toggle('active');
  });
});*/


/*document.querySelectorAll('.event-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const currentBox = button.parentElement;

    document.querySelectorAll('.event-box').forEach(box => {
      if (box !== currentBox) {
        box.classList.remove('active');
      }
    });

    currentBox.classList.toggle('active');
  });
});*/




const form = document.getElementById("wishesForm");
const thankYou = document.getElementById("thankYouMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" }
  })
  .then(res => {
    if (res.ok) {
      thankYou.classList.add("show");
      form.reset();

      setTimeout(() => {
        thankYou.classList.remove("show");
      }, 3000);
    }
  })
  .catch(() => {
    alert("Please try again later.");
  });
});



  /* ===============================
   exploration box============================== */

function loadNearby(type, elementId, keyword) {
  const service = new google.maps.places.PlacesService(
    document.createElement("div")
  );

  service.nearbySearch(
    {
      location: { lat: 17.385044, lng: 78.486671 }, // CHANGE TO VENUE
      radius: 4000,
      keyword: keyword
    },
    (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        const list = document.getElementById(elementId);
        list.innerHTML = "";

        results.slice(0, 10).forEach(place => {
          const li = document.createElement("li");
          li.innerHTML = `
            ${place.name}
            ⭐ ${place.rating || "4.0"}
          `;
          list.appendChild(li);
        });
      }
    }
  );
}

window.onload = () => {
  loadNearby("tourist", "placesList", "tourist attraction");
  loadNearby("food", "foodList", "restaurant cafe");
  loadNearby("temple", "templeList", "temple");
};
