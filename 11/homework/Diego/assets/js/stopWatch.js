StopWatch = {
    hours: 0,
    seconds: 0,
    minutes: 0,
    internalId: null,
    counter: 0,
    counterHasChange: function (hours, minutes, seconds) {},
    start: function () {
        StopWatch.internalId = setInterval(function () {
            StopWatch.counter ++
            StopWatch.seconds = StopWatch.counter % 60
            StopWatch.minutes = Math.floor(StopWatch.counter / 60)
            StopWatch.hours = Math.floor(StopWatch.counter / 3600)
            StopWatch.counterHasChange(StopWatch.hours, StopWatch.minutes, StopWatch.seconds)
        }, 1000)
    }
}

