let playBtn = document.getElementById('playBtn');
let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');
let audioPlayer = document.getElementById('audioPlayer');
let image = document.getElementById('image');
let artistName = document.getElementById('artistName');
let songName = document.getElementById('songName');

let allSongs = [

    Music1 = {
        artist: 'Maninder Buttar',
        musicFile: 'songs/Sakhiyaan - Maninder Buttar.mp3',
        musicName: 'Sakhiyaan',
        artistPic: 'https://images.genius.com/6c161d7902fd9ae072792f136251ce42.781x781x1.jpg'
    },
    Music2 = {
        artist: 'Millind Gaba Ft Kamal Raja',
        musicFile: 'songs/Nazar Lag Jayegi - Millind Gaba Ft Kamal Raja 320 Kbps.mp3',
        musicName: 'Nazar Lag Jayegi',
        artistPic: './pic/Millind_Gaba.jpg'
    }
];

let counter = 0;
audioPlayer.src = allSongs[counter].musicFile;
image.src = allSongs[counter].artistPic;
artistName.innerText = allSongs[counter].artist;
songName.innerText = allSongs[counter].musicName;

let playSong = () =>{
    if(audioPlayer.paused){
        playBtn.innerHTML = '<em class="fas fa-pause"></em>';
        audioPlayer.play();
    }
    else if(audioPlayer.play){
        playBtn.innerHTML = '<em class="fas fa-play"></em>';
        audioPlayer.pause();
    }
}
playBtn.addEventListener('click', playSong)

let nextSong = () =>{
    counter ++;
    if(counter > allSongs.length - 1)
        counter = 0;
    
    audioPlayer.src = allSongs[counter].musicFile;
    image.src = allSongs[counter].artistPic;
    artistName.innerText = allSongs[counter].artist;
    songName.innerText = allSongs[counter].musicName;
    playBtn.innerHTML = '<em class="fas fa-pause"></em>';
    audioPlayer.play();
};
nextBtn.addEventListener('click', nextSong)

let prevSong = () =>{
    counter --;
    if(counter < 0)
        counter = allSongs.length - 1;
    audioPlayer.src = allSongs[counter].musicFile;
    image.src = allSongs[counter].artistPic;
    artistName.innerText = allSongs[counter].artist;
    songName.innerText = allSongs[counter].musicName;
    playBtn.innerHTML = '<em class="fas fa-pause"></em>';
    audioPlayer.play();
};
prevBtn.addEventListener('click', prevSong)
