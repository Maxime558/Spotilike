import { catalogue } from "./modules/catalogue.js";
import { slider } from "./modules/slider.js";
import { audio } from "./modules/audio.js";
// console.dir(catalogue);

const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const playPause = document.querySelector("#playPause");
// Globalthis permet de partager une variable ou une fonction avec tout mes modules
globalThis.track = null;
globalThis.catalogue = catalogue;
globalThis.currentTrack = 0;
globalThis.isPlaying = false;

prevButton.addEventListener("click", () => {
  if (currentTrack > 0) {
    currentTrack--;
  } else {
    currentTrack = catalogue.length - 1;
  }
  slider("prev");
  audio("pause");
  audio();
  audio("play");
  playPause.innerText = "Pause";
  globalThis.isPlaying = true;
  console.log(currentTrack);
});

nextButton.addEventListener("click", () => {
  if (currentTrack < catalogue.length - 1) {
    currentTrack++;
  } else {
    currentTrack = 0;
  }
  slider("next");
  audio("pause");
  audio();
  audio("play");
  playPause.innerText = "Pause";
  globalThis.isPlaying = true;
  console.log(currentTrack);
});

//Action sur le bouton de play-pause
playPause.addEventListener("click", () => {
  if (isPlaying) {
    playPause.innerText = "Play";
    audio("pause");
  } else {
    playPause.innerText = "Pause";
    audio("play");
  }
  isPlaying = !isPlaying;
});

slider();
audio();
