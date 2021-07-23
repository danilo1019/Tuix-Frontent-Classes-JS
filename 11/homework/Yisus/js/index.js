const hoursHtml = document.getElementById('hours')
const minutesHtml = document.getElementById('minutes')
const secondHtml = document.getElementById('seconds')
const secsImage = document.getElementById('seconds_img')
const minsImage = document.getElementById('mins_img')
const hoursImage = document.getElementById('hours_img')
const btnStart = document.getElementById('start')
const btnStop = document.getElementById('stop')
const btnRestart = document.getElementById('restart')

const watch = StopWatchGenerator()
const w = new watch()

w.counterHasChange = function (hours, minutes, seconds) {
    // console.log(hours, minutes, seconds)
    secsImage.style.rotate = (seconds*6) + 'deg'
    minsImage.style.rotate = (minutes*6) + 'deg'
    hoursImage.style.rotate = ((30*hours) + (minutes/2)) + 'deg'

    hoursHtml.innerHTML = (hours.toString().length == 1 ? '0' + hours : hours)  + ':'
    secondHtml.innerHTML = (seconds.toString().length == 1 ? '0' + seconds : seconds)
    minutesHtml.innerHTML = (minutes.toString().length == 1 ? '0' + minutes : minutes)  + ':'
}

stop = function () {
    w.stop()
    btnStop.setAttribute('onClick','resume()')
    btnStop.innerHTML = 'REANUDAR'
}

resume = function () {
    w.start()
    btnStop.setAttribute('onClick','stop()')
    btnStop.innerHTML = 'DETENER'
}

start = function () {
    w.start()
    btnStop.removeAttribute('hidden')
    btnRestart.removeAttribute('hidden')
    btnStart.setAttribute('hidden',true)
}

restart = function () {
    w.restart()
    secsImage.style.rotate = '360deg'
    minsImage.style.rotate = '360deg'
    hoursImage.style.rotate = '360deg'

    hoursHtml.innerHTML = '00' + ':'
    secondHtml.innerHTML = '00' 
    minutesHtml.innerHTML = '00' + ':'

    btnStop.setAttribute('hidden',true)
    btnRestart.setAttribute('hidden',true)
    btnStart.removeAttribute('hidden')

    btnStop.setAttribute('onClick','stop()')
}