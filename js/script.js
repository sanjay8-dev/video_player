//declaring variables
const video = document.getElementById("video");
const play = document.getElementById("play");
const sstop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");


function toggleStatus()
{
    if(video.paused){
        video.play();
    }
    else{
        video.pause ();
    }
}

function updateIcon(){
    if(video.paused){
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>' ;
 
    }
    else{
        play.innerHTML= '<i class="fa fa-pause fa-2x"></i>' ;
    }
}
function updateProgress(){
    progress.value = (video.currentTime/video.duration )*100
    let mins = Math.floor(video.currentTime/60)
if(mins<10){
    mins = '0' + String(mins)
}
let secs = Math.floor(video.currentTime%60)

if(secs<10){
    secs = '0' + String(secs)
    console.log(secs)
}

// timestamp.innerHTML = `${mins}:${secs}` this is also possible
timestamp.innerHTML = mins+':'+secs
}
function stopVideo(){
    video.currentTime = 0;
    video.pause();
}

function setTimeProgress(){
    video.currentTime = (+progress.value * video.duration)/100
}
//togglestatus function is used for add event listener

video.addEventListener("click", toggleStatus);
video.addEventListener("play", updateIcon);
video.addEventListener("pause", updateIcon);
video.addEventListener("timeupdate", updateProgress);
play.addEventListener("click", toggleStatus);
play.addEventListener("click", updateIcon);
sstop.addEventListener("click", stopVideo);
progress.addEventListener("change", setTimeProgress);

// const title = document.getElementById('nameId');
// const year = document.getElementById('year');

// function leapYear(){
// if((year.value)%400==0 && (year.value)%4==0){
// title.innerHTML = `${year.value} is a leap year`;

// }
// else{
// title.innerHTML = `${year.value} is not a leap year`;
// }

// }