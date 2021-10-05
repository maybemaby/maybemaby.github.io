sections = document.querySelectorAll('.switch-button button');

const setActiveSection = (event) => {
  console.log(event.currentTarget);
  for (const section of sections) {
    section.className = section.className.replace(/\s?active/, "");
  }
  event.currentTarget.className += " active"
}

for (const section of sections) {
  section.addEventListener("click", setActiveSection);
}