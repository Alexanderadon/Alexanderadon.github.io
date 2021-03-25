const elem = document.querySelector('.header__menu');

elem.onclick = () => {
document.querySelector('.nav-toggle__element').classList.toggle('active');

const cheked = document.querySelector('.nav_toggle');
state = cheked.style.display;

if (state === '') {
    cheked.style.display = 'block';
    setTimeout(() => {
        cheked.style.transform = 'translate(0,0)';  
    }, 100);
}   else {
    cheked.style.display = '';
    setTimeout(() => {
        cheked.style.transform = 'translate(-125%,0)';
    }, 100);
}    

}

const links = document.querySelectorAll('a[href^="#"]');// все ссылки, с атрибутом href, начинающимся с "#"
links.forEach(item => item.addEventListener('click',
 function(e) {
	e.preventDefault();
	const id = item.getAttribute('href').slice(1);

	document.getElementById(id).scrollIntoView({
		behavior: 'smooth',
		block: 'start',
	});
}));


