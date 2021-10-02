const canvas = document.querySelector('#game');
const ctx = canvas.getContext("2d");

console.log(ctx)
const ground = new Image();
ground.src = "img/holst.png";

const foodImg = new Image();
foodImg.src = "img/food.png"

const foodImgPoison = new Image();
foodImgPoison.src = "img/poison-mushroom.png"

const foodImgApple = new Image();
foodImgApple.src = "img/mushroom.png"

let box = 32;
let score = 0;
let gameOver = "Game Over"
let dir
let food = {
    x: Math.floor((Math.random() * 17 + 1)) * box,
    y: Math.floor((Math.random() * 15 + 3)) * box,
};

let foodPoison = {
    x: Math.floor((Math.random() * 17 + 1)) * box,
    y: Math.floor((Math.random() * 15 + 3)) * box,
};

let foodApple = {
    x: Math.floor((Math.random() * 17 + 1)) * box,
    y: Math.floor((Math.random() * 15 + 3)) * box,
}

let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10 * box,
};

document.addEventListener("keydown", direction);

function direction(event) {
    console.log(event.keyCode)
    if(event.keyCode == 37 && dir != "right")
        dir = "left";
    else if(event.keyCode == 38 && dir != "down")
        dir = "up";
    else if(event.keyCode == 39 && dir != "left")
        dir = "right";
    else if(event.keyCode == 40 && dir != "up")
        dir = "down";
}

function eatBody(head, arr) {
    for(let i = 0; i < arr.length; i++) {
        if(head.x == arr[i].x && head.y == arr[i].y) {
        clearInterval(game);
        ctx.fillStyle = "#fff";
        ctx.font = "50px Arial";
        ctx.fillText(gameOver, box * 5.5, box * 10 );
        setTimeout(function(){
            location.reload();
        }, 2000);
        }
    }
}

function drawGame() {
    ctx.drawImage(ground, 0, 0);

        ctx.drawImage(foodImg, food.x, food.y);
        ctx.drawImage(foodImgPoison, foodPoison.x , foodPoison.y);
        ctx.drawImage(foodImgApple, foodApple.x , foodApple.y);

    for (let i = 0;  i < snake.length; i++) {
        ctx.fillStyle = i == 0 ? "green" : "yellow";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }

    ctx.fillStyle = "#fff";
    ctx.font = "50px Arial";
    ctx.fillText(score, box * 2 , box * 1.7);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(snakeX == food.x && snakeY == food.y) {
        score++;
        food = {
            x: Math.floor((Math.random() * 17 + 1)) * box,
            y: Math.floor((Math.random() * 15 + 3)) * box,
        };


    } else if (snakeX == foodApple.x && snakeY == foodApple.y) {
        score++;
        foodApple = {
            x: Math.floor((Math.random() * 17 + 1)) * box,
            y: Math.floor((Math.random() * 15 + 3)) * box,
        };
    }  else {
        snake.pop();
    }

        if(snakeX == foodPoison.x && snakeY == foodPoison.y) {
            score--
            foodPoison = {
                x: Math.floor((Math.random() * 17 + 1)) * box,
                y: Math.floor((Math.random() * 15 + 3)) * box,

            }
            snake.pop();

        } else if (score < 0) {
            clearInterval(game);
            ctx.fillStyle = "#fff";
            ctx.font = "50px Arial";
            ctx.fillText(gameOver, box * 5.5, box * 10 );
            setTimeout(function(){
                location.reload();
            }, 2000);
        }



    if(snakeX < box || snakeX > box * 17 || snakeY < 3 * box || snakeY > box * 17){
    clearInterval(game);
    ctx.fillStyle = "#fff";
    ctx.font = "50px Arial";
    ctx.fillText(gameOver, box * 5.5, box * 10 );
    setTimeout(function(){
        location.reload();
    }, 2000);
    }


    if(dir == "left") snakeX -= box;
    if(dir == "right") snakeX += box;
    if(dir == "up") snakeY -= box;
    if(dir == "down") snakeY += box;

    let newHead = {
        x: snakeX,
        y: snakeY,
    };



    eatBody(newHead, snake);


    snake.unshift(newHead);

}

let game = setInterval(drawGame, 100);
