import { test, expect, jest } from "@jest/globals"
import Greeter, { Clock } from "../greeter"

const makeClock = (expectedHour: number): Clock => {
  return {
    currentHour: () => expectedHour
  }
}

test('should say "good night" at midnight', () => {
  const clock = {
    currentHour: () => 24
  }

  const greeter = new Greeter(clock)
  const greetings = greeter.greet()

  expect(greetings).toStrictEqual("Good night")
})

test('should never return undefined', () => {
  for (let i = 0; i < 24; i++) {
    const clock = makeClock(i)

    const greeter = new Greeter(clock)
    const greetings = greeter.greet()

    expect(greetings).not.toBeUndefined()
  }
})
