"use strict";

// let user = prompt("Введите свое имя", "User1231231");

let name = document.querySelector('.nameUser');
let liveCheck = document.querySelector('.live');


// name.innerText = user;

const canvas = document.querySelector('#game');
const ctx = canvas.getContext("2d");

const headScore = document.querySelector('.score');

const foodImg = new Image();
foodImg.src = "./images/food2.png";
const korzinaImg = new Image();
korzinaImg.src = "./images/Billy.jpg"

let box = 32;
let score = 0;
let live = 3

let headFood = {
    x: Math.floor((Math.random() * 19)) * box,
    y: box
};

let swamp = {y: canvas.height / 1.5};


canvas.addEventListener("mousemove", (event) => {
    swamp.x = event.clientX;
});

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, 0, 0);
    headFood.y++
}

function drawGame() {
    ctx.fillStyle = "#5d5d5d";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(foodImg, headFood.x, headFood.y);
    ctx.drawImage(korzinaImg, swamp.x, swamp.y)


    let headFoodX = headFood.x;
    let headFoodY = headFood.y;


    let swampX = swamp.x;
    let swampY = swamp.y;

    if (swamp.x === headFood.x && swampY === headFood.y) {
        headFood = {
            x: Math.floor((Math.random() * 15)) * box,
            y: box * 2
        };

    }
    if (headFoodY > swampY) {
        liveCheck.innerText = live - 1;
    }

    if (live < 1) {
        clearInterval(gameStart);
        confirm("Игра окончена") ? location.reload() : "";
    }

    console.log(`корзина по y ${swampY}`);
    console.log(`корзина по x ${swampX}`);
    console.log(`еда по y ${headFoodY}`);
    console.log(`еда по x ${headFoodX}`);
    animate();
}

let gameStart = setInterval(drawGame, 500);


