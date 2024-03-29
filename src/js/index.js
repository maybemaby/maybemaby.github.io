const sections = document.querySelectorAll(".switch-button button");
const projectSection = document.querySelector("section#projects div");
const indicator = document.querySelector("div#nav-indicator");

const setActiveSection = (event) => {
  for (const section of sections) {
    section.className = section.className.replace(/\s?active/, "");
  }
  event.currentTarget.className += " active";
  changeVisibleSection(event.currentTarget.id);
  switch (event.currentTarget.id) {
    // case 'experience':
    //   indicator.style.left = "0%"
    //   break;
    case "projects":
      indicator.style.left = "0%";
      break;
    case "skills":
      indicator.style.left = "47%";
      break;
    default:
      return;
  }
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
    repo: "",
    live: ""
  },
  {
    title: "CantDecide",
    summary: `React app for helping organize decision making and dealing with decision paralysis.\
    Break choices down into factors weighted by the user and calculates each choice's score.\
    Styled with Tailwind, testing pipeline with Jest and Github Actions.`,
    preview: "",
    repo: "",
    live: "https://cantdecideio.netlify.app/"
  },
  {
    title: "Personal Portfolio (this website)",
    summary:
      "Showcase for my projects. Made with vanilla HTML, CSS, and Javascript",
    preview: "",
    repo: "https://github.com/maybemaby/maybemaby.github.io",
  },
  {
    title: "TweetSourcing",
    summary: `Web app made for finding secondary sources of tweet information using keyword extraction.\
    Created with Python, Flask, Bootstrap and tying together Twitter/Google api clients. 
    `,
    preview: "",
    repo: "https://github.com/maybemaby/tweetsourcing-flask",
    live: "https://tweetsourcing-flask.herokuapp.com/"
  },
];

// Populates the project section with cards highlighting projects
let linkButton = document.createElement("a");
linkButton.classList += "button";
linkButton.innerText = "View Source Code";
let icon = document.createElement('img')
icon.alt = 'code-icon'
icon.src = 'static/code.svg'
linkButton.appendChild(icon);
linkButton.target = "_blank"
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
  let links = document.createElement("div");
  links.classList += "project-links";
  card.appendChild(links);
  if (project.repo) {
    let newLink = linkButton.cloneNode(true);
    newLink.href = project.repo;

    links.appendChild(newLink);
  }
  if (project.live) {
    let liveLink = linkButton.cloneNode(true);
    liveLink.href = project.live;
    liveLink.innerText = "Live version"
    liveLink.classList += " live"
    links.appendChild(liveLink)
  }
  projectSection.appendChild(card);
}
