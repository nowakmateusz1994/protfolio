const arrowDown = document.querySelector('.fa-arrow-down');
const nav = document.querySelector('aside');
const navBtn = document.querySelector('span#btn');
const body = document.querySelector('body');


const navFunc = () => {
  arrowDown.classList.toggle('active');
  nav.classList.toggle('active');
  navBtn.classList.toggle('active');

}

navBtn.addEventListener('click', navFunc);

function scroll(e) {

  const href = $(this).attr('href');
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $(href).offset().top
  }, 500);
};

$('a[href*="#"]').click(scroll);


//typing

const h2 = document.querySelector('#introduction h2');
let h2Arr = ['Jestem Mateusz', 'I uczę się programowania'];
let h2ArrIndex = 0;
let h2ArrLetter = 0;
let index;
h2.textContent = '';

const typing = () => {
  if (h2ArrLetter < h2Arr[h2ArrIndex].length) {
    h2.textContent += h2Arr[h2ArrIndex][h2ArrLetter];
    h2ArrLetter++;
  } else {
    clearInterval(index);
    setTimeout(nextWord, 2000)
  }
}

const nextWord = () => {
  h2ArrLetter = 0;
  h2ArrIndex++;
  h2.textContent = '';
  index = setInterval(typing, 200);
  if (h2ArrIndex >= h2Arr.length) {
    h2ArrIndex = 0
  }
}

index = setInterval(typing, 200);



// efekty podczas skrollowania


document.addEventListener('scroll', () => {



  const windowHeight = window.innerHeight;
  const scrollValue = scrollY;



  const mine = document.getElementById('mine');
  const mineFromTop = mine.offsetTop;
  if (scrollValue > mineFromTop - 100) {
    mine.style.opacity = 1;
  } else {
    mine.style.opacity = 0;
  }




  const technology = document.getElementById('technology');
  const technologyFromTop = technology.offsetTop;
  if (scrollValue > technologyFromTop - 100) {
    technology.style.opacity = 1;
  } else {
    technology.style.opacity = 0;
  }

  const portfolio = document.getElementById('portfolio');
  const portfolioFromTop = portfolio.offsetTop;
  if (scrollValue > portfolioFromTop - 100) {
    portfolio.style.opacity = 1;
  } else {
    portfolio.style.opacity = 0;
  }

});