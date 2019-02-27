const arrowDown = document.querySelector('.fa-arrow-down');
const nav = document.querySelector('aside');
const btn = document.querySelector('span');
const body = document.querySelector('body');

const navHeight = nav.offsetHeight;

btn.addEventListener('click' , function(){
  arrowDown.classList.toggle('active');
  nav.classList.toggle('active');
  btn.classList.toggle('active');
  body.classList.toggle('active');
});

$('a').on('click' , function(){
 const goToSection = '#'+ $(this).attr('class');

 $('body , html').animate({
  scrollTop: $(goToSection).offset().top - navHeight 
 }, 1000);

  arrowDown.classList.remove('active');
  nav.classList.remove('active');
  btn.classList.remove('active');
  body.classList.remove('active');

});


