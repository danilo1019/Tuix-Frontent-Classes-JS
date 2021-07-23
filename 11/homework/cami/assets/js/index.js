const hoursHtml = document.getElementById('hours-txt')
const minutesHtml = document.getElementById('minutes-txt')
const secondHtml = document.getElementById('seconds-txt')

const btnStartHtml = document.getElementById('btn-start')
const btnStoptHtml = document.getElementById('btn-stop')
const btnPausetHtml = document.getElementById('btn-pause')
const secondArrowHtml = document.getElementById('second-arrow')
const minuteArrowHtml = document.getElementById('minute-arrow')
const hourArrowHtml = document.getElementById('hour-arrow')


btnStartHtml.addEventListener('click', function () { 
    StopWatch.start()
})

btnStoptHtml.addEventListener('click', function () { 
    StopWatch.stop()
})

btnPausetHtml.addEventListener('click', function () { 
    StopWatch.pause()
})

StopWatch.counterHasChange = function (hours, minutes, seconds) {
    hoursHtml.innerHTML = String(hours).padStart(2,"00")
    secondHtml.innerHTML = String(seconds).padStart(2,"00")
    minutesHtml.innerHTML = String(minutes).padStart(2,"00")
    secondArrowHtml.style.transform = 'rotate('+ Math.floor(seconds*360/60) +'deg)';
    minuteArrowHtml.style.transform = 'rotate('+ Math.floor(minutes*360/60) +'deg)';
    hourArrowHtml.style.transform = 'rotate('+ Math.floor(hours*360/60) +'deg)';
}