/* -----------------------------------------
   Accessibility: Focus outline only for keyboard users
----------------------------------------- */
const handleFirstTab = (e) => {
  if (e.key === "Tab") {
    document.body.classList.add("user-is-tabbing");
    window.removeEventListener("keydown", handleFirstTab);
    window.addEventListener("mousedown", handleMouseDownOnce);
  }
};

const handleMouseDownOnce = () => {
  document.body.classList.remove("user-is-tabbing");
  window.removeEventListener("mousedown", handleMouseDownOnce);
  window.addEventListener("keydown", handleFirstTab);
};

window.addEventListener("keydown", handleFirstTab);

/* -----------------------------------------
   Back-to-Top Button
----------------------------------------- */
const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

const alterStyles = (isVisible) => {
  backToTopButton.style.visibility = isVisible ? "visible" : "hidden";
  backToTopButton.style.opacity = isVisible ? 1 : 0;
  backToTopButton.style.transform = isVisible ? "scale(1)" : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

// Smooth scroll back to top
backToTopButton.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* -----------------------------------------
   Section Reveal Animations
----------------------------------------- */
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach((section) => observer.observe(section));

/* -----------------------------------------
   Interactive Skill Badges
----------------------------------------- */
document.querySelectorAll(".skills li").forEach((skill) => {
  skill.addEventListener("mouseover", () => {
    skill.style.transform = "scale(1.1)";
  });
  skill.addEventListener("mouseout", () => {
    skill.style.transform = "scale(1)";
  });
});

/* -----------------------------------------
   Optional: Dark Mode Toggle
----------------------------------------- */
const toggleDarkMode = document.createElement("button");
toggleDarkMode.textContent = "🌙 Toggle Dark Mode";
toggleDarkMode.className = "btn btn--pink";
document.querySelector("header").appendChild(toggleDarkMode);

toggleDarkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});