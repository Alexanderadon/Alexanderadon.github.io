const images = document.querySelectorAll('.slider .slider__line .slider__item');
// const slider = document.querySelector('.slider');
const sliderLine = document.querySelector('.slider__line');

// let pressed = false;
// let startx;
// let x;
let count = 0;
let width;

function init() {
  // console.log('relize');
  width = document.querySelector('.slider').offsetWidth;
  sliderLine.style.width = width*images.length + 'px';
  // console.log(width);
  images.forEach( item => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  });
  rollSlider();
}

window.addEventListener('resize', init);
init();

// slider.addEventListener('mousedown', (e) => {
//   pressed = true;
//   startx = e.offsetX - sliderLine.offsetLeft;
//   console.log(sliderLine.offsetLeft);
//   slider.style.cursor = 'grabbing';
// });

// slider.addEventListener('mouseenter', () => {
//   slider.style.cursor = 'grab';
// });

// slider.addEventListener('mouseup', () => {
//   slider.style.cursor = 'grab';
// });

// window.addEventListener('mouseup', () => {
//   pressed = false;
// });

// slider.addEventListener('mousemove', (e) => {
//   if (!pressed) return;
//   e.preventDefault();

//   x = e.offsetX

//   sliderLine.style.left = `${x - startx}px`;



//   checkboundary();
// });


// function checkboundary() {
//   let outer = slider.getBoundingClientRect();
//   let inner = sliderLine.getBoundingClientRect();

//   if(parseInt(sliderLine.style.left) > 0) {
//     sliderLine.style.letf = '0px';
//   } else if(inner.right < outer.right) {
//     sliderLine.style.left = `-${inner.width - outer.width}px`
//   }
// }

// checkboundary();

document.querySelector('.slider__arrow__left').addEventListener('click', function() {
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  rollSlider();
})

document.querySelector('.slider__arrow__right').addEventListener('click', function() {
  count++;
  if (count >= images.length) {
    count = 0;
  } else {
    console.log('error')
  }
  rollSlider();
})

function rollSlider() {
  sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}



let img = document.querySelectorAll('.rounded');
let countPhoto = 0;
let imgcount = document.querySelector('[datephoto]');

imgcount.innerHTML =  img.length;
console.log(countPhoto);


img.forEach(element => {
  let arr = [];
  console.log(element.length);

  // count += element.value;

});

