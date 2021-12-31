//jshint esversion:6

const canvas = document.querySelector('#drawingCanvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const lain = document.createElement('img');
const thounny = document.createElement('img');

lain.src = "images/lain.png";
thounny.src = "images/lain.gif";

let paintbrush = lain;


const context = canvas.getContext('2d');

const handleMouseMove = (event) => {
    const left = event.clientX;
    const top = event.clientY;

    context.drawImage(paintbrush, left, top);
};

const handleClick = () => {

    if(paintbrush === lain) {
        paintbrush = thounny;
    } else {
        paintbrush = lain;
    }

};

canvas.addEventListener('click', handleClick);
canvas.addEventListener('mousemove', handleMouseMove);

