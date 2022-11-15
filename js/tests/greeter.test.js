const test = require('tape')
const Greeter = require('../greeter').Greeter

test('should say "good night" at midnight', (t) => {
  const expected = "Good night"
  const greeter = new Greeter()
  const result = greeter.greet()

  if (result == "Good night"){
    t.pass('Said Good night')
  }
  else{
    t.fail('Did not said Good Night')
  }

  t.end()
})

test('should never return undefined', (t) => {
  // TODO : for each hour from 0 to 23, check that Greeter.greet()
  // never returns undefined
  t.fail('TODO')
  t.end()
})
