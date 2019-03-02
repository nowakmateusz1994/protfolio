const arrowDown = document.querySelector('.fa-arrow-down');
const nav = document.querySelector('aside');
const btn = document.querySelector('span');
const body = document.querySelector('body');
const li = document.querySelectorAll('nav ul li');
let howFar;

btn.addEventListener('click', function () {
  arrowDown.classList.toggle('active');
  nav.classList.toggle('active');
  btn.classList.toggle('active');

});

function scroll(e) {

  var href = $(this).attr('href');
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $(href).offset().top
  }, 800);
};

$('a[href*="#"]').click(scroll);