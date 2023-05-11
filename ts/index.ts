import Greeter, { SystemClock } from './greeter'
import UI, { ConsoleInteractor } from './ui'

const main = () => {
  const systemClock = new SystemClock()
  const greeter = new Greeter(systemClock)
  const greetings = greeter.greet()
  console.log(greetings)
  const consoleInteractor = new ConsoleInteractor()
  const ui = new UI(consoleInteractor)
  ui.mainLoop()
}

main()
