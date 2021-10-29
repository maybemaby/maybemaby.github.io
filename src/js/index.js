const sections = document.querySelectorAll(".switch-button button");
const projectSection = document.querySelector("section#projects");

const setActiveSection = (event) => {
  console.log(event.currentTarget);
  for (const section of sections) {
    section.className = section.className.replace(/\s?active/, "");
  }
  event.currentTarget.className += " active";
  changeVisibleSection(event.currentTarget.id);
};

const changeVisibleSection = (id) => {
  for (const section of document.querySelectorAll("section#showcase section")) {
    // If the section clicked on already is displaying, return early
    if (section.id === id && getComputedStyle(section).display === "block") {
      return;
    } else {
      section.style.display = "none";
      if (section.id === id) {
        section.style.display = "block";
      }
    }
  }
};

for (const section of sections) {
  section.addEventListener("click", setActiveSection);
}

//  Initializing project info to fill in with
const projects = [
  {
    title: "InvestBoard",
    summary: `Personal dashboard with charts and tables made for a family member to track their investments from their financial advisor.\
    Uses a Django backend with PostgreSQL and Celery for task queue. React frontend with Material UI. Deployed with Docker on a Linux VPS.`,
    preview: "",
  },
  {
    title: "CantDecide",
    summary: `React app for helping organize decision making and dealing with decision paralysis.`,
    preview: "",
  },
];

// Populates the project section with cards highlighting projects
for (const project of projects) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.id = "small-card";
  let title = document.createElement("h2");
  title.innerText = project.title;
  card.appendChild(title);
  let summary = document.createElement("p");
  summary.classList.add("summary");
  summary.innerText = project.summary;
  card.appendChild(summary);
  projectSection.appendChild(card);
}
