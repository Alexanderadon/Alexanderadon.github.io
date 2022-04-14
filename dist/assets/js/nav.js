// burger items
const burger = document.querySelector('.header__burger');
const nav__list = document.querySelector('.nav--list');
const page = document.querySelector('#page');


burger.addEventListener('click', () => {
    if( document.body.classList.contains('active')) {
        closeMenu();
    } else {
        showMenu();
    }
});

function showMenu() {
    let mask = document.createElement('div');
    mask.classList.add('mask');
    mask.addEventListener('click', closeMenu)
    page.appendChild(mask);

    burger.classList.add('active');
    body.classList.add('active');
    nav__list.classList.add('nav__show');
    document.body.classList.add('mask--mobile');

}

function closeMenu() {
    console.log('closed');
    burger.classList.remove('active');
    document.body.classList.remove('active');
    nav__list.classList.remove('nav__show');
    document.body.classList.remove('mask--mobile');

    document.querySelector('.mask').remove();

}

let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

		let body=document.querySelector('body');
        let timer;
if(isMobile.any()){
		body.classList.add('touch');
		let arrow=document.querySelectorAll('.nav__item--link');
	for(i=0; i<arrow.length; i++){
			let thisLink=arrow[i];
			let subMenu=arrow[i].nextElementSibling;
			let thisArrow=arrow[i].lastElementChild;
			thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function(){
            if (subMenu === null) {
                return false;
            } else {
                subMenu.classList.toggle('open');
            }

			thisArrow.classList.toggle('activeArrow');
            thisLink.classList.toggle('activeColor');

		});
	}
}else{
	body.classList.add('mouse');
}
