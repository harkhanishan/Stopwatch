//stop watch

const timer= document.querySelector('#timer');
var playBtn= document.querySelector('.play_btn');
var resetBtn= document.querySelector('.reset_btn');
let icon= document.querySelector('.timer_controls button');
let secCircle= document.querySelector('.sec_circle');

var hr= 0;
var min= 0;
var sec= 0;
var stoptime= true;

addEvent(playBtn, 'click', playpauseTimer);
addEvent(resetBtn, 'click', resetTimer);
function playpauseTimer()
{
    if(stoptime == true)
    {
        stoptime= false;
        timerCycle();
        icon.innerHTML= 'STOP';
    }
    else
    {
        stoptime= true;
        icon.innerHTML= 'START';
    }
}
function resetTimer()
{
    timer.innerHTML= "00:00:00";
    stoptime= true;
    hr= 0;
    sec= 0;
    min= 0; 
    icon.innerHTML= 'START';
}
setInterval(function(){
    secCircle.style.transform = `rotate(${6*sec}deg)`
}, 1000);

function timerCycle()
{
    if(stoptime == false)
    {
        sec= parseInt(sec);
        min= parseInt(min);
        hr= parseInt(hr);
        sec= sec + 1;
        if(sec == 60)
        {
            min= min + 1;
            sec = 0; 
        }
        if(min == 60)
        {
            hr = hr + 1;
            min = 0;
            sec = 0; 
        }
        if(sec < 10 || sec == 0)
        {
            sec= '0' + sec;
        }
        if(min < 10 || min == 0)
        {
            min= '0' + min;
        }
        if(hr < 10 || hr == 0)
        {
            hr = '0' + hr;
        }
        timer.innerHTML = hr + ':' + min + ':' + sec;
        setTimeout("timerCycle()", 1000);
    }
}