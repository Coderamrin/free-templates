const navBtn = document.querySelector('#navbarNavBtn');
const navNav = document.querySelector('#navbarNav');
const btns = document.getElementsByClassName('nav-link');


for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    let current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';

    navNav.classList.toggle('open');
  });
}

//navbar show and hide functionality on mobile
navBtn.addEventListener('click', () => {
  navNav.classList.toggle('open');
});
