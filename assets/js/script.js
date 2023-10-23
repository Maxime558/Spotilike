import { catalogue } from "./modules/catalogue.js";
import { slider } from "./modules/slider.js";
import { audio } from "./modules/audio.js";
import { playlist } from "./modules/playlist.js";
// console.dir(catalogue);
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const playPause = document.querySelector("#playPause");

// Globalthis permet de partager une variable ou une fonction avec tout mes modules
globalThis.track = null;
globalThis.catalogue = catalogue;
globalThis.currentTrack = 0;
globalThis.isPlaying = false;
globalThis.miniPlayPause = (index) => {
  console.log(index);
  if (currentTrack !== index) {
    currentTrack = index;
    isPlaying = false;
    audio("pause");
    audio();
    slider("next")
  }
  switchPlayPause();
};

// fonction chargée de gérer l'etat de mon bouton Play/Pause
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
  // ! veut dire inverse d'une boolean ex !isPlaying vaut false
  if (!isPlaying /*  === false */) {
    isPlaying = true;
    audio("play");
  } else {
    isPlaying = false;
    audio("pause");
  }
  statusBPP();
  //isPlaying = !isPlaying;
};

// click sur le bouton next
nextButton.addEventListener("click", () => {
  if (currentTrack < catalogue.length - 1) {
    currentTrack++;
  } else {
    currentTrack = 0;
  }
  slider("next");
  // j'arrete la lecture en cours
  audio("pause");
  // je reinitialise track avec la nouvelle valeur de currentTrack
  audio(); //init
  // je relance la lecture
  audio("play");
  // je viens de lancer une nouvelle lecture : isPlaying doit passer à true
  console.log(isPlaying);
  isPlaying = true;
  statusBPP();
});
// idem pour previous
prevButton.addEventListener("click", () => {
  if (currentTrack > 0) {
    currentTrack--;
  } else {
    currentTrack = catalogue.length - 1;
  }
  slider("prev");
  // j'arrete la lecture en cours
  audio("pause");
  // je reinitialise track avec la nouvelle valeur de currentTrack
  audio(); //init
  // je relance la lecture
  audio("play");
  // je viens de lancer une nouvelle lecture : isPlaying doit passer à true
  console.log(isPlaying);
  isPlaying = true;
  statusBPP();
});
// actions sur le bouton play-pause
playPause.addEventListener("click", switchPlayPause);
slider();
audio();
// affichage de la playList
playlist();
