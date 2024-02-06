const nexEl = document.querySelector('.next');
const preEl = document.querySelector('.prev');
const imgeContainerEl = document.querySelector('.image-container');
const imgsEl = document.querySelectorAll('img');

let currentImg = 1;
let timeOut;

nexEl.addEventListener('click', () => {
  clearTimeout(timeOut);
  currentImg++;
  updateImg();
});

preEl.addEventListener('click', () => {
  clearTimeout(timeOut);
  currentImg--;
  updateImg();
});

function updateImg() {
  if (currentImg > imgsEl.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgsEl.length;
  }
  imgeContainerEl.style.transform = `translateX(-${(currentImg - 1) * 50}rem)`;

  timeOut = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}

updateImg();
