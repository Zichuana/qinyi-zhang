const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const sections = navLinks
  .map((link) => {
    const id = link.getAttribute("href");
    return id ? document.querySelector(id) : null;
  })
  .filter(Boolean);

function updateActiveNav() {
  const currentSection = sections.findLast((section) => {
    return window.scrollY >= section.offsetTop - 120;
  });

  navLinks.forEach((link) => {
    const isActive = currentSection && link.getAttribute("href") === `#${currentSection.id}`;
    link.classList.toggle("is-active", Boolean(isActive));
  });
}

updateActiveNav();
window.addEventListener("scroll", updateActiveNav, { passive: true });
