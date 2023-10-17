import { catalogue } from "./modules/catalogue.js";
import { slider } from "./modules/slider.js";
import { audio } from "./modules/audio.js";
// console.dir(catalogue);

let currentTrack = 0;
let isPlaying = false;
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const playPause = document.querySelector("#playPause");
// Globalthis permet de partager une variable ou une fonction avec tout mes modules
globalThis.track = null;
globalThis.catalogue = catalogue;

prevButton.addEventListener("click", () => {
  if (currentTrack > 0) {
    currentTrack--;
  } else {
    currentTrack = catalogue.length - 1;
  }
  slider(currentTrack, "prev");
  console.log(currentTrack);
});

nextButton.addEventListener("click", () => {
  if (currentTrack < catalogue.length - 1) {
    currentTrack++;
  } else {
    currentTrack = 0;
  }
  slider(currentTrack, "next");
  console.log(currentTrack);
});

//Action sur le bouton de play-pause
playPause.addEventListener("click", () => {
  if (isPlaying) {
    playPause.innerText = "Pause";
    audio(currentTrack, "play");
  } else {
    playPause.innerText = "Play";
    audio(currentTrack, "pause");
  }
  isPlaying = !isPlaying;
});

slider(currentTrack);
audio(currentTrack);
