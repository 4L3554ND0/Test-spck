document.getElementById('searchButton').addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        document.getElementById('search-input').focus(); // Foca no input de pesquisa
    });
 /* 
    let playlist = [
  { title: "João e Maria", artist: "Chico Buarque", src: "src/assets/music/misica1.mp3", img: "src/assets/images/capa1.jpg" },
  { title: "Manhã de Carnaval", artist: "Anna Salleh", src: "src/assets/music/misica2.mp3", img: "/src/assets/images/capa2.jpg" },
  { title: "Construção", artist: "Chico Buarque", src: "src/assets/music/misica3.mp3", img: "src/assets/images/capa3.jpg" }
];

let currentSongIndex = 0;

let audioPlayer = document.getElementById('audio-player');
let playIcon = document.getElementById('play-icon');
let songTitle = document.getElementById('song-title');
let songArtist = document.getElementById('song-artist');
let albumCover = document.getElementById('album-cover');
let progress = document.querySelector('.music-display__progress-filled');

function loadSong(song) {
  document.getElementById('audio-source').src = song.src;

  songTitle.textContent = song.title;
  songArtist.textContent = song.artist;

  albumCover.src = song.img;

  audioPlayer.load();
}

function togglePlay() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playIcon.classList.remove('fa-play');
    playIcon.classList.add('fa-pause');
  } else {
    audioPlayer.pause();
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
  }
}

function updateProgress() {
  if (audioPlayer.duration) {
    const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progress.style.width = `${progressPercent}%`;
  }
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % playlist.length;
  loadSong(playlist[currentSongIndex]);
  audioPlayer.play();
  playIcon.classList.remove('fa-play');
  playIcon.classList.add('fa-pause');
}

loadSong(playlist[currentSongIndex]);

document.getElementById('play-button').addEventListener('click', togglePlay);

audioPlayer.addEventListener('timeupdate', updateProgress);

document.getElementById('next-button').addEventListener('click', nextSong);
*/