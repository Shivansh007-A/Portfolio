const roles = ["Builder of Systems", "Seeker of Insights", "Solver of Real Problems"];
let roleIndex = 0;
let charIndex = 0;
const el = document.getElementById("typing");

function type() {
  if (charIndex < roles[roleIndex].length) {
    el.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 120);
  } else {
    setTimeout(erase, 1200);
  }
}

function erase() {
  if (charIndex > 0) {
    el.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 60);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, 400);
  }
}

type();

/* CURSOR GLOW */
const glow = document.querySelector(".cursor-glow");
document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});