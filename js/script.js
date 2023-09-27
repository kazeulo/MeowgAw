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
sr.reveal('.info-card', {delay: 400, origin:'left'});
sr.reveal('.slider-container h2', {delay: 200, origin:'top'});
sr.reveal('.wrapper', {delay: 50, origin:'left'});


/********change bg color on scroll*********/
function changeBg(){
	var header= document.getElementById('header');
	var scrollValue = window.scrollY;
	if(scrollValue < 110){
		header.classList.remove('header');
	}
	else{
		header.classList.add('headerOnScroll');
	}
}

window.addEventListener('scroll', changeBg);


