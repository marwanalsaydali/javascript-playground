// select elements
const turtle = document.querySelector(".turtle");
let x = 0;
let y = 0;
let speed = 5;
let rotateY = false;
let rotate = 0;
function handleKeyDown(e) {
  if (!e.key.includes("Arrow")) {
    return;
  }
  console.log(e.key);
  switch (e.key) {
    case "ArrowUp":
      y -= 1;
      rotate = -90;
      break;
    case "ArrowDown":
      y += 1;
      rotate = 90;
      break;
    case "ArrowLeft":
      x -= 1;
      rotateY = true;
      rotate = 0;
      break;

    case "ArrowRight":
      x += 1;
      rotateY = false;
      rotate = 0;
      break;
    default:
      console.log("Mmmm");
      break;
  }
  turtle.setAttribute(
    "style",
    `--rotateY:${rotateY ? "180deg" : "0"}; --rotate:${rotate}deg; --x:${
      x * speed
    }px; --y:${y * speed}px;`
  );
}
window.addEventListener("keydown", handleKeyDown);
