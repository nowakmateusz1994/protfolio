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

const goTo = (e) => {
  const scrollToDiv = e.target.dataset.key;
  howFar = document.querySelector(`#${scrollToDiv}`).offsetTop;

  setTimeout(scrollWindow, 1);
}

const scrollWindow = () => {

  let scrollPosition = window.scrollY;
  if (scrollPosition != howFar)
    if (scrollPosition > howFar) {
      scrollPosition -= 10;
      window.scrollTo(0, scrollPosition);
      setTimeout(scrollWindow, 1);
    } else {
      scrollPosition += 10;
      window.scrollTo(0, scrollPosition);
      setTimeout(scrollWindow, 1);
    }
}

li.forEach(element => element.addEventListener('click', goTo));