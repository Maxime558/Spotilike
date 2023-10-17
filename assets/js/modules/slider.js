const sliderHTML = document.querySelector("#slider");
const coverUrl = "./assets/img/cover/";

const initSlider = () => {
  const coverSlider = document.createElement("img");
  coverSlider.src = coverUrl + catalogue[currentTrack].cover;
  coverSlider.id = "coverSlider";
  sliderHTML.append(coverSlider);
  const imgA = document.createElement("img");
  imgA.src = coverUrl + catalogue[currentTrack].cover;
  imgA.id = "imgA";
  sliderHTML.append(imgA);
};

const nextSlider = () => {
  document.querySelector("#coverSlider").src =
    coverUrl + catalogue[currentTrack].cover;
  document.querySelector("#imgA").classList.add("transSlider","slideLeft");
  setTimeout(() => {
    document.querySelector("#imgA").src =
      coverUrl + catalogue[currentTrack].cover;
    document.querySelector("#imgA").classList.remove("transSlider","slideLeft");
  },400);
};

const slider = (status = "init") => {
  console.log("Initialisation du slider");

  switch (status) {
    case "init":
      initSlider();
      break;
    case "next":
      nextSlider();
      break;
    case "prev":
      document.querySelector("#coverSlider").src =
        coverUrl + catalogue[currentTrack].cover;
    default:
      break;
  }
};
export { slider };

document.addEventListener("DOMContentLoaded", function () {
  const playlist = document.getElementById("playlist");
  const trackInfo = document.getElementById("trackInfo");

  catalogue.forEach((track, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${track.titre} - ${track.artiste}`;
    listItem.addEventListener("click", () => {
      updateTrackInfo(track);
    });

    const hr = document.createElement("hr");
    playlist.appendChild(listItem);
    playlist.appendChild(hr);
  });

  function updateTrackInfo(track) {
    trackInfo.innerHTML = `
      <img src="./assets/img/cover/${track.cover}" alt="${track.titre} Cover">
      <h3>${track.titre}</h3>
      <p>Artiste: ${track.artiste}</p>
      <p>Genre: ${track.genre.join(", ")}</p>
      <p>Année: ${track.annee}</p>
    `;
  }

  updateTrackInfo(catalogue[0]);
});
