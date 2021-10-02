const startBtn = document.querySelector('#start');
const screen = document.querySelectorAll('.screen');
const timeList = document.querySelector('.time-list');
const timeElement = document.querySelector('#time');
const board = document.querySelector('#board');
const color = ['#FFC0CB', '#FF69B4', '#FFFF00', '#FFD700'];

let time = 20;
let score = 0;

startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screen[0].classList.add('up');
})

timeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        console.log(event.target)
       time = parseInt(event.target.getAttribute('data-time'))
       screen[1].classList.add('up');
    }
});

board.addEventListener('click', (event) => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove();
        createRandomCircle()
    }   else {
        console.log('будь аккуратнее')
    }
})

// Debug
startGame();

function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle();
    setTime(time);
}

function decreaseTime() {
    if(time === 0) {
        finishGame();
    }   else {
        let current = --time;
        if (current < 10) {
            current = `0${current}`
      }
      setTime(current);
    }
}

function setTime(value) {
    timeElement.innerHTML = `00:${value}`

}

function finishGame() {
    board.innerHTML = `<h1>Cчет: <span class="primary">${score}</span></h1>`;
    timeElement.parentNode.classList.add('hide')
}

function createRandomCircle(element) {
    const circle = document.createElement('div');
    const size = getRandomNumber(20, 50);
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);
    const background = backgroundRandomColor();

    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    circle.style.background = `${background}`;

    board.append(circle);
}

function backgroundRandomColor() {
   let index = Math.floor(Math.random() * color.length)
    return color[index];
}

function getRandomNumber(min,max) {
   return Math.round(Math.random() * (max - min) + min)
}
