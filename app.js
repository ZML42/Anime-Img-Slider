const img = document.getElementById("image");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
let images = "img";
let counter = 0;
img.style.backgroundImage = `url(/Images/img${counter}.jpg)`;
nextBtn.addEventListener("click", () => {
  counter++;
  if (counter > 3) {
    counter = 0;
  }
  img.style.backgroundImage = `url(/Images/img${counter}.jpg)`;
  console.log(img);
});
prevBtn.addEventListener("click", () => {
  counter--;
  if (counter < 0) {
    counter = 3;
  }
  img.style.backgroundImage = `url(/Images/img${counter}.jpg)`;
});
