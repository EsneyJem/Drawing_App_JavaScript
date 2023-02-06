const canvas = document.getElementById("canvas");
const canva = document.querySelector(".canvas")
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearBtn = document.getElementById("clear");
const eraserBtn = document.getElementById("eraser");
const lineBtn = document.getElementById("line");
const lineDrawBtn = document.getElementById('lineDraw')
const redColor = document.getElementById("redColor");
const greenColor = document.getElementById("greenColor");
const blueColor = document.getElementById("blueColor");
const ctx = canvas.getContext("2d");

let size = 5;
let isPressed = false;
let color = "black";
let x = undefined;
let y = undefined;
let linePressed = 0;
let lineTrue = false;
let lineDrawTrue = true;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY + 25;

  if (lineTrue) {
    drawlines(x, y, x3, y3);
  }
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
  x3 = e.offsetX;
  y3 = e.offsetY +25;

  linePressed += 1;

  if (linePressed >= 2) {
    
    clearDrawSelection();
    linePressed = 0;
  }
});

canvas.addEventListener("mousemove", (e) => {
 if ( lineDrawTrue){
  if (isPressed) {
    const x2 = e.offsetX ;
    const y2 = e.offsetY + 25;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }}

});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2.05;
  ctx.stroke();
}

increaseBtn.addEventListener("click", () => {
  size += 5;
  if (size > 50) {
    size = 50;
  }
  updateSizeOnScreen();
});

decreaseBtn.addEventListener("click", () => {
  size -= 5;
  if (size < 5) {
    size = 5;
  }
  updateSizeOnScreen();
});

clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canva.classList = 'active'
  color = "black";
  size = 5;

  linePressed = 0;
  clearDrawSelection();
});

function updateSizeOnScreen() {
  sizeEl.innerText = size;
}

colorEl.addEventListener("click", (e) => {
  color = e.target.value;
});

redColor.addEventListener("click", (e) => {
  color = e.target.value;
});
greenColor.addEventListener("click", (e) => {
  color = e.target.value;
});

blueColor.addEventListener("click", (e) => {
  color = e.target.value;
});

eraserBtn.addEventListener("click", () => {
  color = "#f5f5f5";
  lineTrue = false;
  lineDrawTrue = true;
  linePressed = 0;
  canva.classList = 'canvas';

  clearDrawSelection();
});

lineBtn.addEventListener("click", () => {
  lineTrue = true;
  lineDrawTrue = false;
  linePressed = 0;
  color = 'black';
  canva.classList = 'active';

  clearDrawSelection();
});

lineDrawBtn.addEventListener('click', () => {
  lineDrawTrue = true;
  lineTrue = false;
  color = 'black'; 
  canva.classList = 'active'

})

function drawlines(x, y, x3, y3) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x3, y3);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2.05;
  ctx.stroke();
}


function drawRect(x, y, x2, y2){
	ctx.fillRect(x, y, x2, y2);
	ctx.strokeRect();
  ctx.lineWidth = size;
	ctx.strokeStyle = color;
  ctx.fillStyle = 'none';
}

function clearDrawSelection(){
  x = undefined;
  y = undefined;
  x3 = undefined;
  y3 = undefined;
};


// drawRect(50, 50, 200, 200)