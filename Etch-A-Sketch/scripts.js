// select the elements
const canvas = document.querySelector("#sketch");
const ctx = canvas.getContext("2d");
const shakeButton = document.querySelector(".clear");
// Variables
const MOVE_AMOUNT = 10;
let hue = 0;
// setup the canvas
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = MOVE_AMOUNT; // the line width
// we need to select randome starting
// const width = canvas.width;
// const heigh = canvas.heigh;
// or new why of destraction
const { width, height } = canvas;
// get a random value to where to start
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
// start drawing
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();
// draw now
function draw({ key }) {
  hue += 1; // change hue value
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(x, y); // start from where the point is
  switch (key) {
    case "ArrowUp":
      y -= MOVE_AMOUNT;
      break;
    case "ArrowDown":
      y += MOVE_AMOUNT;
      break;
    case "ArrowLeft":
      x -= MOVE_AMOUNT;
      break;
    case "ArrowRight":
      x += MOVE_AMOUNT;
      break;
    default:
      break;
  }

  //   x -= MOVE_AMOUNT;
  //   y -= MOVE_AMOUNT;
  ctx.lineTo(x, y);
  ctx.stroke();
}
function handleKey(e) {
  // preventDefault on Arrows key
  if ((e.key.includes = "Arrow")) e.preventDefault();
  //   console.log(e);
  draw({ key: e.key });
}
function shakeIt() {
  ctx.clearRect(0, 0, width, height);
  canvas.classList.add("shake");
  canvas.addEventListener(
    "animationend",
    function () {
      canvas.classList.remove("shake");
    },
    { once: true }
  ); // to only register the eventlistener one time
}
// listen for arrow key
window.addEventListener("keydown", handleKey);
// listem for button clicks
shakeButton.addEventListener("click", shakeIt);
