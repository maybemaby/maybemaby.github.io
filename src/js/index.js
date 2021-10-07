sections = document.querySelectorAll('.switch-button button');

const setActiveSection = (event) => {
  console.log(event.currentTarget);
  for (const section of sections) {
    section.className = section.className.replace(/\s?active/, "");
  }
  event.currentTarget.className += " active"
  changeVisibleSection(event.currentTarget.id);
}

const changeVisibleSection = (id) => {
  for (const section of document.querySelectorAll('section#showcase section')) {
    // If the section clicked on already is displaying, return early
    if (section.id === id && getComputedStyle(section).display === 'block') {
      return
    }
    else {
      section.style.display = 'none';
      if (section.id === id) {
        section.style.display = 'block';
      }
    }
  }
}

for (const section of sections) {
  section.addEventListener("click", setActiveSection);
}