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
  currentTrack = (currentTrack + 1) % catalogue.length;
  document.querySelector("#coverSlider").src =
    coverUrl + catalogue[currentTrack].cover;
  document.querySelector("#imgA").classList.add("transSlider", "slideLeft");
  setTimeout(() => {
    document.querySelector("#imgA").src =
      coverUrl + catalogue[currentTrack].cover;
    document
      .querySelector("#imgA")
      .classList.remove("transSlider", "slideLeft");

    updateTrackInfo(catalogue[currentTrack]);
  }, 400);
};

const prevSlider = () => {
  currentTrack = (currentTrack - 1 + catalogue.length) % catalogue.length;
  document.querySelector("#coverSlider").src =
    coverUrl + catalogue[currentTrack].cover;
  document.querySelector("#imgA").classList.add("transSlider", "slideRight");
  setTimeout(() => {
    document.querySelector("#imgA").src =
      coverUrl + catalogue[currentTrack].cover;
    document
      .querySelector("#imgA")
      .classList.remove("transSlider", "slideRight");

    updateTrackInfo(catalogue[currentTrack]);
  }, 400);
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
      prevSlider();
      break;
    default:
      break;
  }
};
export { slider };
