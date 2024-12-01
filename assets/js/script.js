document.addEventListener("DOMContentLoaded", function () {
  const URL = "./assets/json/about_me.json";

  async function getAboutData() {
    try {
      const response = await fetch(URL);
      console.log(response);
      if (!response.ok) {
        throw new Error(`HTTP ERROR: ${response.status}`);
      }
      const data = await response.json();
      // console.log(data);

      if (data.education) {
        showEducation(data.education);
      } else {
        console.log("No such data as education data found");
      }

      if (data.work) {
        showWork(data.work);
      } else {
        console.log("No such data as work data found");
      }

      if (data.projects) {
        showProjects(data.projects);
      } else {
        console.log("No such data as projects data found");
      }
    } catch (error) {
      console.error(
        `Error occured while fetching or processing the data: ${error}`
      );
    }
  }

  function showEducation(eduData) {
    const eduSection = document.getElementById("education");

    eduData.forEach((edu) => {
      const eduItem = document.createElement("article");
      eduItem.innerHTML = `
        <div class="col-1">
            <h4 class="ocupation">${edu.degree}</h4>
            <p class="company"><img src="./assets/images/svg/company.svg" alt="Company SVG icon.">${edu.school}</p>
            <p class="location"><img src="./assets/images/svg/location.svg" alt="Location SVG icon.">${edu.location}</p>
        </div>

        <div class="col-2">
            <p class="education-type">${edu["education-type"]}</p>
            <p class="duration">${edu.duration}</p>
        </div>
        `;
      eduSection.appendChild(eduItem);
    });
  }

  function showWork(workData) {
    const workSection = document.getElementById("work");

    workData.forEach((work) => {
      const workItem = document.createElement("article");
      workItem.innerHTML = `
        <div class="col-1">
            <h4 class="ocupation">${work.position}</h4>
            <p class="company"><img src="./assets/images/svg/company.svg" alt="Company SVG icon.">${work.company}</p>
            <p class="location"><img src="./assets/images/svg/location.svg" alt="Location SVG icon.">${work.location}</p>
        </div>

        <div class="col-2">
            <p class="employment-type">${work["employment-type"]}</p>
            <p class="duration">${work.duration}</p>
        </div>
        `;
      workSection.appendChild(workItem);
    });
  }

  function showProjects(projectsData) {
    const projectsSection = document.getElementById("projects");

    projectsData.forEach((project) => {
      const projectItem = document.createElement("article");
      projectItem.classList.add("card-articles");

      projectItem.innerHTML = `
        <img src="${project.image}" alt="${project.name}" />
        <div class="card-content">
            <h4 class="card-title">${project.name}</h4>
            <p class="card-description">${project.description}</p>
            <p class="card-stack"><strong>Tech Stack: </strong>${project.technologies}</p>
        </div>

        <div class="card-a-links">
            <a href="${project.live_demo}" target="_blank"><img src="./assets/images/svg/link.svg" alt="Link SVG image">Live Preview</a>
            <a href="${project.github}" target="_blank"><img src="./assets/images/svg/github.svg" alt="GitHub SVG image">View Code</a>
        </div>
        `;
      projectsSection.appendChild(projectItem);
    });
  }

  // <p>${project.description.length > 30 ? project.description.slice(0, 30) + "..." : project.description}</p>

  getAboutData();

  // Toggle Menu
  const menu = document.getElementById("menu");
  const mobile = document.getElementById("mobile");
  const desktop = document.getElementById("desktop");

  menu.addEventListener("click", () => {
    if (mobile.style.display === "none" || mobile.style.display === "") {
      closeMenu();
      mobile.style.display = "grid";
    } else {
      mobile.style.display = "none";
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 480) {
      desktop.style.display = "grid";
      mobile.style.display = "none";
    } else {
      desktop.style.display = "none";
      menu.classList.remove("change");
    }
  });

  function closeMenu() {
    menu.classList.toggle("change");
  }

  // Contact modal
  const formBtn = document.getElementById("formBtn");
  const formModal = document.getElementById("formModal");
  const close = document.getElementsByClassName("close")[0];

  formBtn.addEventListener("click", () => {
    formModal.style.display = "flex";
  });

  close.addEventListener("click", () => {
    formModal.style.display = "none";
  });
});
