const StopWatchGenerator = function () {
    this.hours = 0
    this.minutes = 0
    this.seconds = 0
    this.counter = 0
    this.internalId = null

    const that = this

    return function () {
        this.getHours = function () {
            return that.hours
        }
        this.getMinutes = function () {
            return that.minutes
        }
        this.getSeconds = function () {
            return that.seconds
        }
        this.getCounter = function () {
            return that.counter
        }
        this.getInternalId = function () {
            return that.internalId
        }

        this.setMinutes = function (_minutes) {
            that.minutes = _minutes
        }
        this.setHours = function (_hours) {
            that.hours = _hours
        }
        this.setSeconds = function (_seconds) {
            that.seconds = _seconds
        }
        this.setCounter = function (_counter) {
            that.counter = _counter
        }
        this.setInternalId = function (_internalId) {
            that.internalId = _internalId
        }    

        const that2 = this

        this.counterHasChange = function (hours,minutes,seconds) {}
    
        this.start = function () {

            that2.setInternalId(
                setInterval(function () {
                    count = that2.getCounter() + 1
                    that2.setCounter(count)
                    that2.setSeconds(that2.getCounter() % 60)
                    that2.setMinutes(Math.floor(that2.getCounter() / 60) % 60)
                    that2.setHours(Math.floor(that2.getCounter() / 3600))
                    that2.counterHasChange(that2.getHours(), that2.getMinutes(), that2.getSeconds())
                }, 1000)
            )            
        }

        this.stop = function () {
            clearInterval(that2.getInternalId())
        }

        this.restart = function () {
            that2.setCounter(0)
            clearInterval(that2.getInternalId())
        }
    
    }
}




