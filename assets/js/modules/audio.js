const audio = (catalogue,currentTrack) => {
    console.log('initialisation de l\'audio');
    const urlAudio = "./assets/audio/";
    let track = new Audio(urlAudio+catalogue[currentTrack].audio);
    console.dir(track);
};

export { audio };