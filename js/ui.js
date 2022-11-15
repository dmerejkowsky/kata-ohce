const prompt = require('prompt-sync')()
const reverse = require('./ohce').reverse

class ConsoleInteractor {

  callCount = 0
  messages = []

  readInput () {
    // return prompt('')
    this.callCount++
    if(this.callCount == 1) return "hello"
    if(this.callCount == 2) return "oto"
    if(this.callCount == 3) return "quit"
  }

  printMessage (message) {
    // console.log(message)
    this.messages.push(message)
  }
}

class UI {
  constructor () {
    this.interactor = new ConsoleInteractor()
  }

  mainLoop () {
    while (true) {
      const input = this.interactor.readInput()
      if (input === 'quit') {
        break
      }
      const reversed = reverse(input)
      this.interactor.printMessage(reversed)
      if (input === reversed) {
        this.interactor.printMessage('That was a palindrome!')
      }
    }
  }
}

module.exports = { UI }
