const bod = document.body;
const cards = document.querySelectorAll(".cards");

let isDragging = false;
let offsetX, offsetY;
let current = null;

cards.forEach((element) => {
  const randamL = Math.random() * (bod.clientWidth - element.offsetWidth);
  const randamT = Math.random() * (bod.clientHeight - element.offsetHeight);

  element.style.left = randamL + "px";
  element.style.top = randamT + "px";
});

cards.forEach((element) => {
  element.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - element.offsetLeft;
    offsetY = e.clientY - element.offsetTop;
    current = element;
  });
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    let newleft = e.clientX - offsetX;
    let newTop = e.clientY - offsetY;
    newleft = Math.max(
      0,
      Math.min(bod.clientWidth - current.offsetWidth, newleft)
    );
    newTop = Math.max(
      0,
      Math.min(bod.clientHeight - current.offsetHeight, newTop)
    );
    current.style.left = newleft + "px";
    current.style.top = newTop + "px";
  }
});

document.addEventListener("mouseup", (e) => {
  isDragging = false;
  current = null;
});
