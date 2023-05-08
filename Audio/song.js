const song1 = new Audio("music/song1.mp3")
const song2 = new Audio("music/song2.mp3")
const song3 = new Audio("music/song3.mp3")

let song1Playing = false
let song2Playing = false
let song3Playing = false


function playSong1(){
    const button = document.querySelector("#playPauseBtn1");
    if(song1Playing === false) {
        button.querySelector("img").src = "https://cdn-icons-png.flaticon.com/512/0/375.png";
        song1.play()
        song2.pause()
        song3.pause()
        song1Playing = true
        song2Playing = false
        song3Playing = false
    }else if (song1Playing === true){
        song1.pause()
        button.querySelector("img").src = "https://png.pngitem.com/pimgs/s/117-1177251_pause-button-play-pause-button-png-transparent-png.png";
        song1Playing = false
    }
}
function loadSong1(){
    song1.load()
    song1Playing = false    
}

function playSong2(){
    const button = document.querySelector("#playPauseBtn2");

    if(song2Playing === false) {
        button.querySelector("img").src = "https://cdn-icons-png.flaticon.com/512/0/375.png";
        song2.play()
        song1.pause()
        song3.pause()
        song2Playing = true
        song1Playing = false
        song3Playing = false
    }else if (song2Playing === true){
        song2.pause()
        button.querySelector("img").src = "https://png.pngitem.com/pimgs/s/117-1177251_pause-button-play-pause-button-png-transparent-png.png";
        song2Playing = false
    }
}
function loadSong2(){
    song2.load()
    song2Playing = false
}

function playSong3(){
    const button = document.querySelector("#playPauseBtn3");
    if(song3Playing === false) {
        button.querySelector("img").src = "https://cdn-icons-png.flaticon.com/512/0/375.png";
        song3.play()
        song1.pause()
        song2.pause()
        song3Playing = true
        song2Playing = false
        song1Playing = false
    }else if (song3Playing === true){
        song3.pause()
        button.querySelector("img").src = "https://png.pngitem.com/pimgs/s/117-1177251_pause-button-play-pause-button-png-transparent-png.png";
        song3Playing = false
    }
}
function loadSong3(){
    song3.load()
    song3Playing = false
}