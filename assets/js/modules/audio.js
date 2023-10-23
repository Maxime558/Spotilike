const audio = (status = "init") => {
    const urlAudio = "./assets/audio/";
  
    switch (status) {
      case "init":
        track = new Audio(urlAudio + catalogue[currentTrack].audio);
        break;
      case "play":
        console.dir(track);
        track.play();
        break;
      case "pause":
        track.pause();
        break;
      default:
        break;
    }
  };
  
  export { audio };