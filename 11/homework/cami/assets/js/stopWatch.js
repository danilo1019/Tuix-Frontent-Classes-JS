
StopWatch = {
    hours: 0,
    seconds: 0,
    minutes: 0,
    internalId: null,
    counter: 0,
    counterHasChange: function (hours, minutes, seconds) {},
    start: function () {
        if (StopWatch.internalId) return
        StopWatch.internalId = setInterval(function () {
            StopWatch.counter ++
            StopWatch.seconds = StopWatch.counter % 60
            StopWatch.minutes = Math.floor((StopWatch.counter / 60) % 60 )
            StopWatch.hours = Math.floor(StopWatch.counter / 3600)
            StopWatch.counterHasChange(StopWatch.hours, StopWatch.minutes, StopWatch.seconds)
        }, 1000)
    },
    pause: function () {
        clearInterval(StopWatch.internalId)
        StopWatch.internalId = null
    },
    stop: function () {
        clearInterval(StopWatch.internalId)
        StopWatch.internalId = null
        StopWatch.counter = 0
        StopWatch.seconds = 0
        StopWatch.minutes = 0
        StopWatch.hours = 0
        StopWatch.counterHasChange(StopWatch.hours, StopWatch.minutes, StopWatch.seconds)
    }
}

