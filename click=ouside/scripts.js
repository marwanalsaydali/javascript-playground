const cardButton = document.querySelectorAll(".card button");
const innerModule = document.querySelector(".module-inner");
const outerModule = document.querySelector(".module-outter");

function handleCardButton(e) {
  const button = e.currentTarget;
  const card = button.closest(".card");
  // grab the info from the card
  const imgsrc = card.querySelector("img").src;
  const imgAlt = card.querySelector("img").alt;
  const desc = card.dataset.desc;
  innerModule.innerHTML = `
    <img src=${imgsrc} alt =${imgAlt} >
    <h4>${desc}</h4> 
  `;
  outerModule.classList.add("open");
}
function closeModule() {
  outerModule.classList.remove("open");
}
cardButton.forEach((button) => {
  button.addEventListener("click", handleCardButton);
});

outerModule.addEventListener("click", function (e) {
  const isOutside = !e.target.closest(".module-inner");
  if (isOutside) {
    closeModule();
  }
});

window.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModule();
  }
});
