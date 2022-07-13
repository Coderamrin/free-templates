const navbar = document.querySelector('.navbar');
const navBtn = document.querySelector('#navbarNavBtn');
const navNav = document.querySelector('#navbarNav');
const navLinks = document.getElementsByClassName('nav-link');

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function () {
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

//adding the scrolled class when scrolled
window.onscroll = () => {
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};

//testimonial slider
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 2,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    440: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
