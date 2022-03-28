const musicContainer = document.querySelector(".music-container");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const audio = document.querySelector("#audio");
const progress = document.getElementById('.progress');
const progressContainer = document.getElementById('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');


// Song title
const songs = ['hey', 'summer', 'ukulele'];

// Keep track of songs
let songIndex = 1;

// Initially load the song info DOM
loadSong(songs[songIndex]);


// Update song details
function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}

function playSong() {
    musicContainer.classList.add("play");
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove("play");
    playBtn.querySelector("i.fas").classList.remove('fa-pause')
    playBtn.querySelector("i.fas").classList.add('fa-play')

    audio.pause();
}


function prevSong() {
    songIndex--;

    if(songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);
    playSong();

}

function nextSong() {
    songIndex++;

    if(songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);
    playSong();
}

function updateProgress(e) {
    // console.log(e.srcElement.currentTime);
    // console.log(e.srcElement.duration);

    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    // progress.style.width = `${progressPercent}%`;  
}


function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
    
}

// Event Listeners
playBtn.addEventListener("click", () => {
    const isPlaying = musicContainer.classList.contains("play");

    if(isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
})


// Change song events
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

audio.addEventListener("timeupdate", updateProgress);

progressContainer.addEventListener("click", setProgress);

audio.addEventListener("ended", nextSong);