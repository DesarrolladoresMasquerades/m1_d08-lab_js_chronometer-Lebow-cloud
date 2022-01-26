class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
  this.intervalId = setInterval(()=>{
    this.currentTime++
    callback()
  }, 1 * 1000)

  }

  getMinutes() {
    
    let minutes = this.currentTime/60 
    return Math.floor(minutes)
  }

  getSeconds() {
    let seconds = this.currentTime % 60
    return seconds
  }

  computeTwoDigitNumber(value) {
    let bikini = value.toString()

    if (bikini.length < 2) return ("0" + bikini) 
    else return bikini
  
  }

  stop() {

    clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0
  }

  split() {
   return this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds())

   
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
