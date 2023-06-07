const StartStopBtn= document.getElementById('StartStopBtn');
const ResetBtn = document.getElementById('ResetBtn');


let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSeconds= 0 ;
let leadingMinutes = 0;
let leadingHours = 0;

let timeStatus = 'stopped';
let timeInterval =null;

function StopWatch(){
    seconds++;
     
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;
    }
    if(minutes / 60 === 1){
        minutes = 0;
        hours++;
    }
    leadingSeconds = seconds >= 10 ? seconds : "0"+seconds.toString();
    leadingMinutes = minutes >= 10 ? minutes : "0"+minutes.toString();
    leadingHours = hours >= 10 ? hours : "0"+hours.toString();
    document.getElementById('timer').innerText 
    = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`;

}

// window.setInterval(StopWatch, 1);

StartStopBtn.addEventListener('click',()=>{
     
    if(timeStatus === 'stopped'){
        timeInterval = window.setInterval(StopWatch, 1000);
        document.getElementById('StartStopBtn').innerHTML = `<i class="fa-solid fa-pause" ></i>`;
        timeStatus = 'played';
    }else{
         window.clearInterval(timeInterval);
         document.getElementById('StartStopBtn').innerHTML = `<i class="fa-solid fa-play" ></i>`;
         timeStatus= 'stopped'; 
    }
})

ResetBtn.addEventListener('click' ,()=>{
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerText = "00:00:00";
})