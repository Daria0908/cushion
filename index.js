//добавление картинок товара
const images = [
  { big: "src/images/black.png", small: "src/images/black-small.png" },
  { big: "src/images/orange.png", small: "src/images/orange-small.png" },
  { big: "src/images/pink.png", small: "src/images/pink-small.png" },
  { big: "src/images/yellow.png", small: "src/images/yellow-small.png" },
];

const imgSmall = document.getElementById("photo__small");
const imgBig = document.getElementById("photo__big");

images.forEach((img) => {
  let photo = document.createElement("img");
  photo.src = img.small;
  photo.classList.add("photo__small");
  imgSmall.append(photo);
});

const photosSmall = [...document.getElementsByClassName("photo__small")];
photosSmall.forEach((photo, i) => {
  photo.addEventListener("click", () => {
    imgBig.src = images[i].big;
  });
});

//добавление цены
const prices = {
  "previous price": "R 250.00",
  "current price": "R 160.00",
};

const previousPrice = document.getElementById("price__previous");
previousPrice.textContent = prices["previous price"];

const currentPrice = document.getElementById("price__current");
currentPrice.textContent = prices["current price"];

//добавление цветов
const colors = ["black", "orange", "pink", "yellow"];
const listColor = document.getElementById("list__color");

colors.forEach((item, i) => {
  let color = document.createElement("option");
  color.textContent = item;
  color.value = i;
  listColor.append(color);
});

//добавление размеров
const sizes = ["2", "3", "4", "5"];
const listSize = document.getElementById("list__size");

sizes.forEach((item, i) => {
  let size = document.createElement("option");
  size.textContent = item;
  size.value = i;
  listSize.append(size);
});

//добавление таймера
const timer = document.getElementById("timer");
const TIME_LIMIT = 3620;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;

timer.innerHTML = `<div class="base-timer"><span id="base-timer-label" class="base-timer__label">${formatTime(
  timeLeft
)} </span></div>`;

startTimer();

function formatTime(time) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((timeLeft - hours * 3600) / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${hours}:${minutes}:${seconds}`;
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML =
      formatTime(timeLeft);
  }, 1000);
}

//добавление звездочек
const stars = document.getElementById("stars");
for (let i = 0; i < 5; i++) {
  let star = document.createElement("img");
  star.src = "src/images/star-fill.png";
  stars.append(star);
}
