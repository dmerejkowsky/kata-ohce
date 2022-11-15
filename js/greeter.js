class SystemClock {
  currentHour () {
    const date = new Date()
    return date.getHours()
  }
}

class Greeter {
  constructor () {
    this.clock = new SystemClock()
  }

  greet () {
    let currentHour = 0;
    // const currentHour = this.clock.currentHour()
    // added code
    for (let i = 0; i <= 23; i++) {
      currentHour = i;
    }
    if (currentHour >= 6 && currentHour < 12) {
      return 'Good morning'
    }
    if (currentHour >= 12 && currentHour <= 19) {
      return 'Good afternoon'
    }
    if (currentHour >= 20 || currentHour < 6) {
      return 'Good night'
    }
  }
}

module.exports = { Greeter }
