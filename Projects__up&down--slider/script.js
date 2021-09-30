const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');

const container = document.querySelector('.container');

const sidebar = document.querySelector('.sidebar');
const mainslide = document.querySelector('.main-slide');

const slidecount = mainslide.querySelectorAll('div').length

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidecount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up');
})

downBtn.addEventListener('click', () => {
    changeSlide('down');
})

document.addEventListener('keydown',event => {
    if (event.key === 'ArrowUp') {
        changeSlide('up');
    } else if(event.key === 'ArrowDown') {
        changeSlide('down');
    }
})

function changeSlidemouse(direction) {
    setInterval(() => {
    if (direction === 'mouseSlideUp') {
        activeSlideIndex++
        if(activeSlideIndex === slidecount)
            {
            activeSlideIndex = 0;
        }
    }
    const height = container.clientHeight;

    mainslide.style.transform = `translateY(-${activeSlideIndex * height}px)`

    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}, 3500);
}
changeSlidemouse('mouseSlideUp');

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex === slidecount)
            {
            activeSlideIndex = 0;
        }
    }   else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidecount - 1
        }
    }

    const height = container.clientHeight;

    mainslide.style.transform = `translateY(-${activeSlideIndex * height}px)`

    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}

