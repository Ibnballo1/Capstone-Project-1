// mobile menu
const menuBar = document.getElementById('menu_bar');
const times = document.getElementById('close_menu');
const hamburgerBtn = document.getElementById('menuBarImg');
const closeBar = document.getElementById('close_bar');
const lists = document.getElementById('menu_list');
const hiddenScrol = document.getElementById('hideOverflow');
// const blurEffect = document.querySelectorAll('.toblur');
let isDisplay = true;

menuBar.addEventListener('click', () => {
    if (isDisplay) {
      hamburgerBtn.style.display = 'none';
      times.style.display = 'block';
      closeBar.classList.add('icon-menu');
      lists.classList.replace('navis', 'js-nav-list');
      hiddenScrol.classList.add('hide-scroll');
     /* for (let i = 0; i < blurEffect.length; i += 1) {
        blurEffect[i].classList.add('blurring');
      }*/
      isDisplay = false;
    } else {
      hamburgerBtn.style.display = 'block';
      times.style.display = 'none';
      closeBar.classList.replace('icon-menu', 'nav-menu');
      lists.classList.replace('js-nav-list', 'navis');
      hiddenScrol.classList.remove('hide-scroll');
      /*for (let i = 0; i < blurEffect.length; i += 1) {
        blurEffect[i].classList.remove('blurring');
      }*/
      isDisplay = true;
    }
  });