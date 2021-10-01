const board = document.querySelector('#board');
const color = ['#5611ec', '#dd03e4', '#7409c7', '#ee82ee', '#e55d87', '#fb63f9']
let NUMBER = 1292;

for (let i = 0; i < NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square);
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square);
    })

    board.append(square);
}

function setColor(element) {
    element.style.backgroundColor = getRandomColor();
    element.style.boxShadow = `0 0 5px ${getRandomColor()}, 0 0 10px ${getRandomColor()}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 5px #000`;

}

function getRandomColor() {
    let index = Math.floor(Math.random() * color.length)
     return color[index]
  }
