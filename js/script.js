/********menu icon toggle*********/
let menu= document.querySelector("#menu-icon");
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
}

/********transition*********/
const sr= ScrollReveal ({
	distance: '65px',
	duration: 2600,
	delay: 450,
	reset: true
});

sr.reveal('.menu-text', {delay: 200, origin:'top'});
sr.reveal('.menu-img', {delay: 450, origin:'top'});
sr.reveal('.icons', {delay: 500, origin:'left'});
sr.reveal('.infosection h2', {delay: 200, origin:'top'});
sr.reveal('.infosection', {delay: 500, origin:'left'});
sr.reveal('.slider-container h2', {delay: 100, origin:'top'});
sr.reveal('.wrapper', {delay: 70, origin:'left'});


/********change bg color on scroll*********/
function changeBg() {
  var header = document.getElementById('header');
  var scrollValue = window.scrollY;

  if (scrollValue < 500) {
    header.classList.remove('headerOnScroll');
    header.classList.add('header');
  } else {
    header.classList.remove('header');
    header.classList.add('headerOnScroll');
  }
}

window.addEventListener('scroll', changeBg);


/*************scroll down button***********/

document.getElementById('scroll-link').addEventListener('click', function (event) {
  event.preventDefault();

  const targetId = this.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);

  window.scrollTo({
    top: targetElement.offsetTop,
    behavior: 'smooth'
  });
});


