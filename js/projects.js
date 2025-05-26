const projects = [
  {
    title: "Жеке портфолио",
    author:"Abdimutalip Ayan 24/7",
    link: "https://final-react-project-red.vercel.app",
    image: "images/project1.png",
    description: "Дизайн мен функционалдығы үйлескен, кәсіби веб-портфолио үлгісі."
  },
  {
    title: "Ойын дүкені",
    author:"Tuzelbai Azamat 24/3",
    link: "https://azamattuz.github.io/Games---Shop",
    image: "images/project2.png",
    description: "Заманауи стильде жасалған ойындарға арналған интерактивті интернет-дүкен."
  },
  {
    title: "Borcelle фитнес орталығы",
    author:"Nurqadyr Baqbergen 24/5",
    link: "https://final-gym-project.netlify.app",
    image: "images/project3.png",
    description: "Салауатты өмір салтын дәріптейтін заманауи фитнес орталығының веб-сайты."
  },
  {
    title: "Жеке портфолио",
    author:"Berik Aziz 24/2",
    link: "https://portfolio-orcin-alpha-88.vercel.app",
    image: "images/project4.png",
    description: "Жас веб-әзірлеушінің шығармашылығы мен қабілетін көрсететін жеке портфолио."
  },
  {
    title: "ProfScope мамандану орталығы",
    author:"Unerbaev Imangali 24/7",
    link: "https://profscore-work.netlify.app",
    image: 'images/project5.png',
    description: "Кәсіби бағдар беретін және мамандық таңдауға көмектесетін платформа."
  },
  {
    title: "Алматы шыңдары",
    author:"Yerzhan Bagzhan 24/8",
    link: "https://final-react-project-xi.vercel.app",
    image: "images/project6.png",
    description: "Алматы табиғатын көркем көрсететін визуалды веб-саяхат."
  },
  {
    title: "Мини ойындар",
    author:"Yesemuratov Asadbek 24/8",
    link: "https://final-react-nine.vercel.app",
    image: "images/project7.png",
    description: "Қызықты әрі жеңіл интерфейсімен бірнеше мини-ойындар жиынтығы."
  },
  {
    title: "Фитнес тренер",
    author:"Yesbolat Tolganay 24/3",
    link: "https://silver-zabaione-d245cb.netlify.app/",
    image: "images/project8.png",
    description: "Жеке жаттығу бағдарламалары мен фитнес кеңестері жинақталған веб-қосымша."
  },
  {
    title: "Кітапхана",
    author:"Jakan Mariyam 24/3",
    link: "https://aquamarine-tarsier-92df3c.netlify.app",
    image: "images/project9.png",
    description: "Кітаптарды іздеп, оқуға болатын ыңғайлы онлайн кітапхана."
  },
  {
    title: "Галактика/Планеталар",
    author:"Seisenbay Anuar 24/2",
    link: "https://oper08.github.io/Kosmos-Project/",
    image: "images/project10.png",
    description: "Ғарыш әлеміне саяхат жасауға мүмкіндік беретін танымдық платформа."
  },
  {
    title: "Табиғат",
    author:"Abdikadirov Nurlan 25/2",
    link: "https://nurlan2913.github.io/boom-project/main.html",
    image: "images/project11.png",
    description: "Қазақстан табиғатының сұлулығын паш ететін веб-парақша."
  },
  {
    title: "Chic Flowers",
    author:"Zhaqanbay Ayala 24/6",
    link: "https://myjs-project.netlify.app",
    image: "images/project12.png",
    description: "Гүлдер дүкеніне арналған әсем және заманауи дизайндағы сайт."
  },
  {
    title: "Ауа-райы қосымшасы",
    author:"Tabysbekuly Aibar 25/2",
    link: "https://aibart.github.io/Weather-App/fp.html",
    image: "images/project13.png",
    description: "Күн райын нақты уақытпен көрсететін қарапайым әрі пайдалы құрал."
  },
  {
    title: "ToDo қосымшасы",
    author:"Tugumbay Khadidzha 24/6",
    link: "https://final-projj.netlify.app/",
    image: "images/project14.png",
    description: "Күнделікті тапсырмаларды басқаруға арналған ыңғайлы құрал."
  },
  {
    title: "Музыка",
    author:"Tugumbay Khadidzha 24/6",
    link: "https://drnyash.github.io/Qo",
    image: "images/project15.png",
    description: "Музыка тыңдауға арналған қарапайым және әдемі веб-платформа."
  },
  {
    title: "Кино сайты",
    author:"Rakhymberdi Ayaulym 24/1",
    link: "https://project-movie1.netlify.app",
    image: "images/project16.png",
    description: "Фильмдер жайлы ақпарат пен трейлерлер жинақталған кино сайты."
  },
  {
    title: "Ежелгі Греция",
    author:"Nurzhan Aziza 24/3",
    link: "https://visionary-squirrel-e11e5e.netlify.app",
    image: "images/project17.png",
    description: "Ежелгі өркениеттің тарихы мен мәдениетін таныстыратын веб-сайт."
  },
  {
    title: "Жануарлар Планетасы",
    author:"Sharipkhan Danial 24/3",
    link: "https://noscam01.github.io/animal1/index.html",
    image: "images/project18.png",
    description: "Жануарлар әлемін зерттеуге арналған қызықты және танымдық платформа."
  },
  {
    title: "Дорама Веб-қосымшасы",
    author:"Zhaqanbay Ayala 24/6",
    link: "https://doramaproject.netlify.app",
    image: "images/project19.png",
    description: "Көңілді дорамалар мен азия сериалдарына арналған стильді веб-қосымша."
  },
  {
    title: "Drive Smart",
    author:"Yesemuratov Asadbek 24/8",
    link: "https://asadbek96.github.io/Javascript-Project/",
    image: "images/project20.png",
    description: "Көлік жүргізу ережелерін үйренуге арналған білім беру платформасы."
  },
  {
    title: "Бюджет менеджері",
    author:"Abdimutalip Ayan 24/7",
    link: "https://menage-badget.vercel.app",
    image: "images/project21.png",
    description: "Шығын мен кірісті оңай бақылауға мүмкіндік беретін қаржылық қосымша."
  },
  {
    title: "Witcher",
    author:"Asirbek Aibek 25/2",
    link: "https://aibek5631.github.io/Witcher/witcher.html",
    image: "images/project22.png",
    description: "Ойын әлеміндегі Witcher туралы әсерлі және стильді веб-парақша."
  },
  {
    title: "WeHealth",
    author:"Maratuly Azamat 24/6",
    link: "https://wehealth.netlify.app",
    image: "images/project23.png",
    description: "Денсаулықты бақылауға арналған пайдалы әрі қарапайым веб-қосымша."
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
            <h6 class="author-title">${project.author}</h6>
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