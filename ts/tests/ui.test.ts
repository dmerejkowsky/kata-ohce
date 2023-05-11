import { expect, test } from '@jest/globals'
import UI, { Interactor } from '../ui'
import assert from "node:assert"

class FakeInteractor implements Interactor {
  inputs: string[]
  outputs: string[]

  constructor(inputs: string[]) {
    this.inputs = inputs
    this.outputs = []
  }

  readInput(): Promise<string> {
    const res = this.inputs.shift()
    assert(res, "Not enough pre-set inputs")
    return Promise.resolve(res)
  }

  printMessage(message: string): void {
    this.outputs.push(message)
  }

  close(): void {
  }

}

test('main loop', async () => {
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
  const inputs = [
    'hello',
    'oto',
    'quit'
  ]
  const interactor = new FakeInteractor(inputs)
  const ui = new UI(interactor)

  await ui.mainLoop()

  const actual = interactor.outputs
  const expected = [
    'olleh',
    'oto',
    'That was a palindrome!'
  ]
  expect(actual).toEqual(expected)
})
