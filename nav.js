const arrowDown = document.querySelector('.fa-arrow-down');
const nav = document.querySelector('aside');
const btn = document.querySelector('span');
const body = document.querySelector('body');
const li = document.querySelectorAll('nav ul li');

btn.addEventListener('click', function () {
  arrowDown.classList.toggle('active');
  nav.classList.toggle('active');
  btn.classList.toggle('active');

});

const scrollTo = (e) => {
  const scrollToElement = e.target.dataset.key;

}

li.forEach(element => element.addEventListener('click', scrollTo));