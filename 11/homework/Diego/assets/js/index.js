const number = document.getElementById('number')
const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')

StopWatch.start()
StopWatch.counterHasChange = function (hours, minutes, seconds) {
    console.log(hours, minutes, seconds)
    number.innerHTML = String(hours).padStart(2,"00")+":"+String(minutes).padStart(2,"00")+":"+String(seconds).padStart(2,"00")
    hour.style.transform = 'translate(665px,-419px) rotate('+ Math.floor(hours*360/60) +'deg)'
    minute.style.transform = 'translate(666px,-449px) rotate('+ Math.floor(minutes*360/60) +'deg)'
    second.style.transform = 'translate(666px,-449px) rotate('+ Math.floor(seconds*360/60) +'deg)'    
}


