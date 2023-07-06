// Navbar sticky navigation bar on scroll
window.addEventListener("scroll", function () {
  let navbar = document.querySelector("nav");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

// Smooth Scrolling
// Get all the section elements
const sections = document.querySelectorAll("section");

// Function to handle the scroll event
/* function handleScroll(event) {
  event.preventDefault();

  const delta = event.wheelDelta || -event.detail;
  const direction = delta > 0 ? -1 : 1;

  let visibleSectionIndex = -1;
  for (let i = 0; i < sections.length; i++) {
    const rect = sections[i].getBoundingClientRect();
    if (rect.top >= 0) {
      visibleSectionIndex = i;
      break;
    }
  }

  const nextSectionIndex = visibleSectionIndex + direction;

  if (nextSectionIndex >= 0 && nextSectionIndex < sections.length) {
    sections[nextSectionIndex].scrollIntoView({
      behavior: "smooth",
    });
  }
}

document.addEventListener("wheel", handleScroll, { passive: false });
document.addEventListener("DOMMouseScroll", handleScroll, { passive: false }); */



/*--------------------------------------------------------------
# Funcionalidad Light/Dark Mode
--------------------------------------------------------------*/
const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click", () => {
    document.body.classList.toggle("light");
    btnSwitch.classList.toggle("active");
});