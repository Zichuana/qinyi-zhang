const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const sections = navLinks
  .map((link) => {
    const id = link.getAttribute("href");
    return id ? document.querySelector(id) : null;
  })
  .filter(Boolean);

function updateActiveNav() {
  let currentSection = null;
  for (let i = sections.length - 1; i >= 0; i -= 1) {
    const section = sections[i];
    if (window.scrollY >= section.offsetTop - 120) {
      currentSection = section;
      break;
    }
  }

  navLinks.forEach((link) => {
    const activeHref = currentSection ? `#${currentSection.id}` : null;
    const isActive = activeHref && link.getAttribute("href") === activeHref;
    link.classList.toggle("is-active", Boolean(isActive));
  });
}

updateActiveNav();
window.addEventListener("scroll", updateActiveNav, { passive: true });
