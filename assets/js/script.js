// typing text animation script
var typed = new Typed(".typing-text", {
  strings: ["Full Stack Developer", "Web Developer", "Coder"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});

// tilt effect for images
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 15,
});

// fetch skills data from skills.json
async function fetchData(type = "skills") {
  let response = await fetch("skills.json");
  const data = await response.json();
  return data;
}

// show skills in the skills container
function showSkills(skills) {
  let skillsContainer = document.getElementById("skillsContainer");
  let skillHTML = "";
  skills.forEach(skill => {
    skillHTML += `
      <div class="bar">
        <div class="info">
          <img src=${skill.icon} alt="skill" />
          <span>${skill.name}</span>
        </div>
      </div>`;
  });
  skillsContainer.innerHTML = skillHTML;
}

// load skills on page
fetchData().then(data => {
  showSkills(data);
});

// initialize scrollreveal
const srtop = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});

// scroll reveal animations
srtop.reveal(".home .content h2", { delay: 200 });
srtop.reveal(".home .content p", { delay: 200 });
srtop.reveal(".home .content .btn", { delay: 200 });
srtop.reveal(".home .image", { delay: 400 });
srtop.reveal(".home .linkedin, .home .github, .home .twitter, .home .telegram, .home .instagram, .home .dev", { interval: 200 });
srtop.reveal(".about .content h3", { delay: 200 });
srtop.reveal(".about .content .tag", { delay: 200 });
srtop.reveal(".about .content p", { delay: 200 });
srtop.reveal(".about .content .box-container", { delay: 200 });
srtop.reveal(".about .content .resumebtn", { delay: 200 });
srtop.reveal(".skills .container", { interval: 200 });
srtop.reveal(".education .box", { interval: 200 });
srtop.reveal(".contact .container", { delay: 400 });
