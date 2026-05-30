/* ================= TYPING ANIMATION ================= */

const roles = [
  "Builder of Systems",
  "Seeker of Insights",
  "Solver of Real Problems"
];

let roleIndex = 0;
let charIndex = 0;

const typingEl = document.getElementById("typing");

function type() {
  if (!typingEl) return;

  if (charIndex < roles[roleIndex].length) {
    typingEl.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1200);
  }
}

function erase() {
  if (!typingEl) return;

  if (charIndex > 0) {
    typingEl.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, 400);
  }
}

type();


/* ================= SCROLL REVEAL (IMPROVED) ================= */

const sections = document.querySelectorAll(".section");

let lastScrollY = window.scrollY;

function handleScroll() {
  const currentScrollY = window.scrollY;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();

    // SHOW when scrolling down and section enters view
    if (rect.top < window.innerHeight - 120) {
      section.classList.add("show");
    }

    // HIDE only when scrolling up AND section is below viewport
    if (currentScrollY < lastScrollY && rect.top > window.innerHeight) {
      section.classList.remove("show");
    }
  });

  lastScrollY = currentScrollY;
}

window.addEventListener("scroll", handleScroll);

// run once on load
handleScroll();


/* ================= CURSOR GLOW ================= */

const glow = document.querySelector(".cursor-glow");

if (glow) {
  document.addEventListener("mousemove", (e) => {
    glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
}


/* ================= SMOOTH LOAD EFFECT ================= */

window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});