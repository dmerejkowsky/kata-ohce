const prompt = require('prompt-sync')()
const reverse = require('./ohce').reverse

class TestInteractor {

  messages = ["hello", "oto", "quit"]
  logs = []

  readInput () {
    const msg = this.messages.shift()
    return msg
  }

  printMessage (message) {
    this.messages.push(message)
  }

}

class ConsoleInteractor {
  readInput () {
    return prompt('')
  }

  printMessage (message) {
    console.log(message)
  }
}

class UI {
  constructor (susInteractor) {
    if(susInteractor) this.interactor = new susInteractor()
    else this.interactor = new ConsoleInteractor()
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

module.exports = { TestInteractor, UI }
