const slider = (catalogue, currentTrack, status = "init") => {
  console.log("Initialisation du slider");
  // console.dir(catalogue);
  // console.log(catalogue[0].cover);
  // console.log(catalogue[0]["cover"]);
  const sliderHTML = document.querySelector("#slider");
  const coverUrl = "./assets/img/cover/";

  switch (status) {
    case "init":
      const coverSlider = document.createElement("img");
      coverSlider.src = coverUrl + catalogue[currentTrack].cover;
      coverSlider.id = "coverSlider";
      // prepend insert un element avant ceux existant deja dans le parent
      // sliderHTML.prepend(coverSlider);
      // append insert un element après ceux existant deja dans le parent
      sliderHTML.append(coverSlider);
      break;
    case "next":
      document.querySelector("#coverSlider").src =
        coverUrl + catalogue[currentTrack].cover;
      break;
    case "prev":
      document.querySelector("#coverSlider").src =
        coverUrl + catalogue[currentTrack].cover;
    default:
      break;
  }
};
export { slider };
