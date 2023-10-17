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

prevButton.addEventListener("click", () => {
  if (currentTrack > 0) {
    currentTrack--;
  } else {
    currentTrack = catalogue.length - 1;
  }
  slider(catalogue, currentTrack, "prev");
  console.log(currentTrack);
});

nextButton.addEventListener("click", () => {
  if (currentTrack < catalogue.length - 1) {
    currentTrack++;
  } else {
    currentTrack = 0;
  }
  slider(catalogue, currentTrack, "next");
  console.log(currentTrack);
});

//Action sur le bouton de play-pause
playPause.addEventListener("click", () => {
  if (isPlaying) {
    playPause.innerText = "Play";
    audio(catalogue, currentTrack, "play");
  } else {
    playPause.innerText = "Pause";
    audio(catalogue, currentTrack, "pause");
  }
  isPlaying = !isPlaying;
});

slider(catalogue, currentTrack);
audio(catalogue, currentTrack);
