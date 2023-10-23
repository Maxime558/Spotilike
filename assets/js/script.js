import { catalogue } from "./modules/catalogue.js";
import { slider } from "./modules/slider.js";
import { audio } from "./modules/audio.js";
import { playlist } from "./modules/playlist.js";
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const playPause = document.querySelector("#playPause");
const subTime = document.querySelector("#subTime");
globalThis.sliderHTML = document.querySelector("#slider");
const mc = new Hammer(sliderHTML);
const mcTime = new Hammer(document.body, { direction: Hammer.DIRECTION_ALL });
const mcBody = new Hammer(document.body, { direction: Hammer.DIRECTION_ALL });
mcTime.on("panright", () => {
  if (track.currentTime < track.duration)
    track.currentTime += 0.5;
});
mcTime.on("panleft", () => {
  if (track.currentTime > 0)
    track.currentTime +- 0.5;
});
mcBody.on("panup", () => {
  if (track) {
    if (track.volume <= 0.99) {
      track.volume += 0.01;
    }
  }
});

mcBody.on("pandown", () => {
  if (track) {
    if (track.volume >= 0.01) {
      track.volume -= 0.01;
    }
  }
});

globalThis.track = null;
globalThis.catalogue = catalogue;
globalThis.currentTrack = 0;
globalThis.isPlaying = false;
globalThis.miniPlayPause = (index) => {
  if (currentTrack !== index) {
    currentTrack = index;
    isPlaying = false;
    audio("pause");
    audio();
    slider("next");
  }
  switchPlayPause();
};

const statusBPP = () => {
  if (!isPlaying) {
    playPause.innerHTML =
      '<img src="assets/img/play_icon.svg" alt="Play Icon" class="icon">';
  } else {
    playPause.innerHTML =
      '<img src="assets/img/pause_icon.svg" alt="Pause Icon" class="icon">';
  }
};

const switchPlayPause = () => {
  if (!isPlaying) {
    isPlaying = true;
    audio("play");
  } else {
    isPlaying = false;
    audio("pause");
  }
  statusBPP();
};

const prevEvents = () => {
  if (currentTrack > 0) {
    currentTrack--;
  } else {
    currentTrack = catalogue.length - 1;
  }
  slider("prev");
  audio("pause");
  audio();
  audio("play");
  isPlaying = true;
  statusBPP();
};

const nextEvents = () => {
  if (currentTrack < catalogue.length - 1) {
    currentTrack++;
  } else {
    currentTrack = 0;
  }
  slider("next");
  audio("pause");
  audio();
  audio("play");
  isPlaying = true;
  statusBPP();
};

mc.on("swiperleft", prevEvents);
nextButton.addEventListener("click", nextEvents);

mc.on("swiperight", prevEvents);
prevButton.addEventListener("click", prevEvents);

playPause.addEventListener("click", switchPlayPause);
slider();
audio();
console.dir(track);

setInterval(() => {
  let w = (track.currentTime * 100) / track.duration;
  subTime.style.width = w + "%";
  console.log(w);
}, 50);
playlist();
