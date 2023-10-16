import { catalogue } from "./modules/catalogue.js";
import { slider } from "./modules/slider.js";
// console.dir(catalogue);
let currentTrack = 0;

const prevButton = document.querySelector("#prev");
prevButton.addEventListener("click", () => {
  if (currentTrack > 0) {
    currentTrack--;
  } else {
    currentTrack = catalogue.length - 1;
  }
    console.log(currentTrack);
});

const nextButton = document.querySelector("#next");
// click sur le bouton next
nextButton.addEventListener("click", () => {
  if (currentTrack < catalogue.length - 1) {
    currentTrack++;
  } else {
    currentTrack = 0;
  }
  console.log(currentTrack);
});

slider(catalogue, currentTrack);
