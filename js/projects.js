const projects = [
    {
      title: "Portfolio Website",
      link: "https://final-react-project-red.vercel.app",
      image: "images/project1.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugiat..."
    },
    {
      title: "Game Shop",
      link: "https://azamattuz.github.io/Games---Shop",
      image: "images/project2.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugiat..."
    },
    {
      title: "Borcelle Fitness",
      link: "https://final-gym-project.netlify.app",
      image: "images/project3.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugiat..."
    },
    {
      title: "Personal Portfolio",
      link: "https://portfolio-orcin-alpha-88.vercel.app",
      image: "images/project4.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugiat..."
    },
    {
      title: "ProfScope",
      link: "https://profscore-work.netlify.app",
      image: 'images/project5.png',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugiat..."
    },
    {
      title: "Peaks of Almaty",
      link: "https://final-react-project-xi.vercel.app",
      image: "images/project6.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugiat..."
    },
    {
      title: "Mini Games",
      link: "https://final-react-nine.vercel.app",
      image: "images/project7.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugiat..."
    },
    {
      title: "Fitness Coach",
      link: "https://silver-zabaione-d245cb.netlify.app/",
      image: "images/project8.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugiat..."
    },
    {
      title: "Library",
      link: "https://aquamarine-tarsier-92df3c.netlify.app",
      image: "images/project9.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugiat..."
    },
    {
      title: "Galaxy/Planets",
      link: "https://oper08.github.io/Kosmos-Project/",
      image: "images/project10.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugiat..."
    },
    {
      title: "Nature",
      link: "https://nurlan2913.github.io/boom-project/main.html",
      image: "images/project11.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugiat..."
    },
    {
      title: "Chic Flowers",
      link: "https://myjs-project.netlify.app",
      image: "images/project12.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugiat..."
    },
    {
      title: "Weather App",
      link: "https://aibart.github.io/Weather-App/fp.html",
      image: "images/project13.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugiat..."
    },
    {
        title: "ToDo App",
        link: "https://final-projj.netlify.app/",
        image: "images/project14.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugiat..."
    },
    {
        title: "Music",
        link: "https://drnyash.github.io/Qo",
        image: "images/project15.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugiat..."
    },
    {
        title: "Movie Website",
        link: "https://project-movie1.netlify.app",
        image: "images/project16.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugiat..."
    },
    {
        title: "Ancient Greece",
        link: "https://visionary-squirrel-e11e5e.netlify.app",
        image: "images/project17.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugiat..."
    },
    {
        title: "Animal Planet",
        link: "https://noscam01.github.io/animal1/index.html",
        image: "images/project18.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugiat..."
    },
    {
        title: "Dorama Website",
        link: "https://doramaproject.netlify.app",
        image: "images/project19.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugiat..."
    },
    {
        title: "Drive Smart",
        link: "https://asadbek96.github.io/Javascript-Project/",
        image: "images/project20.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugiat..."
    }
  ];


const container = document.getElementById("project-container");
const loadMoreBtn = document.getElementById("load-more");

let isShowingAll = false;

// Тек алғашқы 6 жобаны көрсету
function displayProjects(startIndex, endIndex) {
  for (let i = startIndex; i < endIndex; i += 3) {
    const row = document.createElement("div");
    row.className = "row d-flex justify-content-center";

    for (let j = i; j < i + 3 && j < endIndex && j < projects.length; j++) {
      const project = projects[j];

      const col = document.createElement("div");
      if(j<6){
        col.className = "col-md-4 d-flex ftco-animate";
      }else{
        col.className = "col-md-4 d-flex";
      }

      col.innerHTML = `
        <div class="blog-entry justify-content-end">
          <a href="${project.link}" class="block-20 zoom-effect" style="background-image: url('${project.image}'); height: 200px;">
          </a>
          <div class="text mt-3 float-right d-block">
            <h3 class="heading"><a href="${project.link}">${project.title}</a></h3>
            <p>${project.description}</p>
          </div>
        </div>
      `;

      row.appendChild(col);
    }

    container.appendChild(row);
  }
}

// Алғашқы 6 жобаны көрсетеміз
displayProjects(0, 6);

// Батырма басылған кезде қалғандарын қосу
loadMoreBtn.addEventListener("click", () => {
  if (!isShowingAll) {
    displayProjects(6, projects.length); // қалғандарын қосамыз
    isShowingAll = true;
    loadMoreBtn.style.display = "none"; // батырманы жасырамыз
  }
});