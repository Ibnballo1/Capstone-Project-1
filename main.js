// mobile menu
const menuBar = document.getElementById('menu_bar');
const times = document.getElementById('close_menu');
const hamburgerBtn = document.getElementById('menuBarImg');
const closeBar = document.getElementById('close_bar');
const lists = document.getElementById('menu_list');
const hiddenScrol = document.getElementById('hideOverflow');
let isDisplay = true;

menuBar.addEventListener('click', () => {
  if (isDisplay) {
    hamburgerBtn.style.display = 'none';
    times.style.display = 'block';
    closeBar.classList.add('icon-menu');
    lists.classList.replace('navis', 'js-nav-list');
    hiddenScrol.classList.add('hide-scroll');
    isDisplay = false;
  } else {
    hamburgerBtn.style.display = 'block';
    times.style.display = 'none';
    closeBar.classList.replace('icon-menu', 'nav-menu');
    lists.classList.replace('js-nav-list', 'navis');
    hiddenScrol.classList.remove('hide-scroll');
    isDisplay = true;
  }
});

// Feautre Speaker
const data = [
  {
    title: 'Yochai Benkler',
    description: 'Berkman Professor of Entrepreneural Legal Studies at Harvard Law School',
    linkImg: 'images/speaker_01.png',
    more: 'Benkler Studies commoms-based peer production, and puublished his seminar book The Wealth of Networks in 2006.',
  },
  {
    title: 'Kilnam Chon',
    description: 'Director of Art Center Nabi and a board member Webtekhy',
    linkImg: 'images/speaker_02.png',
    more: `As the main venue for new media art production in Nigeria. Webtekhy promotes 
      cross-disciplinary collaboration and understanding among science technologies, humanities, and arts.`,
  },
  {
    title: 'SohYeong Noh',
    description: 'Director of Art Center Nabi and a board member Webtekhy',
    linkImg: 'images/speaker_03.png',
    more: `As the main venue for new media art production in Nigeria. Webtekhy promotes cross-disciplinary
       collaboration and understanding among science technologies, humanities, and arts.`,
  },
  {
    title: 'Julia Leda',
    description: 'Berkman Professor of Entrepreneural Legal Studies at Harvard Law School',
    linkImg: 'images/speaker_04.png',
    more: 'Benkler Studies commoms-based peer production, and puublished his seminar book The Wealth of Networks in 2006.',
  },
  {
    title: 'Lilia Tretikov',
    description: 'Lilia Tretikov Professor of Entrepreneural Legal Studies at Harvard Law School',
    linkImg: 'images/speaker_05.png',
    more: `As the main venue for new media art production in Nigeria. Webtekhy promotes cross-disciplinary
         collaboration and understanding among science technologies, humanities, and arts.`,
  },
  {
    title: 'Ryan Merkley',
    description: 'Ryan Merkley Professor of Entrepreneural Legal Studies at Harvard Law School',
    linkImg: 'images/speaker_06.png',
    more: 'Benkler Studies commoms-based peer production, and puublished his seminar book The Wealth of Networks in 2006.',
  },
];

const featureSpeakerSection = document.querySelector(".speakers-details");
const moreSpeaker = document.querySelector('.more-speakers');
const more = document.querySelector('.more');
const entity = document.querySelector('.entity');
let counter = 0;

// Create a DocumentFragment to store the elements
const speakersFragment = document.createDocumentFragment();

data.forEach((featureSpeakers) => {
  const { title, description, linkImg, more } = featureSpeakers;

  const speakerElement = document.createElement("div");
  let speakerClass = (counter > 2) ? 'speaker-hidden' : `speaker-show`;

  speakerElement.classList.add(`${speakerClass}`);
  speakerElement.innerHTML = `
    <div class="image${counter + 1}"></div>
      
      <div class="sp-${counter + 1}-details">
          <h3 class="sp-name tertiary-font">${title}</h3>
          <p class="sp-details tertiary-font">
              ${description}
          </p>
          <div class="divider"></div>
          <p class="footnote">
              ${more}
          </p>
      </div>
  `;

  speakerElement.querySelector(
    `.image${counter + 1}`
  ).style.backgroundImage = `url("${linkImg}")`;
  // Set background image dynamically

  speakersFragment.appendChild(speakerElement);
  counter += 1;
});

// Append the DocumentFragment to the featureSpeakerSection div container
featureSpeakerSection.innerHTML = "";
featureSpeakerSection.appendChild(speakersFragment);

let clickCount = 0;

moreSpeaker.addEventListener('click', (e)=>{
  if (clickCount == 0 || clickCount % 2 == 0) {
    document.querySelectorAll(".speaker-hidden").forEach((sh) => {
      sh.style.display = "grid";
    });
    more.innerHTML = 'Less'
    entity.innerHTML = '&#x1431';
  } else {
    document.querySelectorAll(".speaker-hidden").forEach((sh) => {
      sh.style.display = "none";
    });
    more.innerHTML = "More";
    entity.innerHTML = "&#5167;";
  }

  clickCount++;
})
