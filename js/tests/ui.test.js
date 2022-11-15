const test = require('tape')
const { TestInteractor, UI } = require('../ui')

test('main loop', (t) => {
  /* TODO
    Given the following inputs:
    - hello
    - oto
    - quit

    Check that the following messages are printed:
    - olleh
    - oto
    - That was a palindrome!
    */
  
  const ui = new UI(TestInteractor)
  ui.mainLoop()

  if(ui.interactor.messages[0] == "olleh") t.pass("reverse print olleh")
  else t.fail("reverse dont print olleh")

  if(ui.interactor.messages[1] == "oto") t.pass("reverse print oto")
  else t.fail("reverse dont print oto")

  if(ui.interactor.messages[2] == "That was a palindrome!") t.pass("palindrome message is print")
  else t.fail("palindrome message is not print")

  t.end()
})
