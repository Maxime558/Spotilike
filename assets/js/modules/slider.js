const slider = (catalogue,currentTrack) => {
  console.log("Initialisation du slider");
  // console.dir(catalogue);
  // console.log(catalogue[0].cover);
  // console.log(catalogue[0]["cover"]);
  const sliderHTML = document.querySelector("#slider");
  const coverUrl = "./assets/img/cover/";

  const coverSlider = document.createElement("img");
  coverSlider.src = coverUrl + catalogue[currentTrack].cover;

  // prepend insert un element avant ceux existant deja dans le parent
  sliderHTML.prepend(coverSlider);
  // append insert un element après ceux existant deja dans le parent
  // sliderHTML.append(coverSlider);
};

export { slider };
