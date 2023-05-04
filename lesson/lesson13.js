//const song1 = new Audio("folder name / which song")
//http://web.ligaudio.ru/mp3/justin%20bieber
//https://x2download.app/zh-tw26/download-youtube-to-mp3


const song1 = new Audio("music/justinbieber.mp3")

function playSong1(){
    console.log("play song one")

    song1.play()
}
function pauseSong1(){
    console.log("pause song one")

    song1.pause()
}
function loadSong1(){
    console.log("load song one")
    song1.load()
}