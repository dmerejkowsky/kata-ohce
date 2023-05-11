import * as readline from 'node:readline/promises'
import { reverse } from './ohce'

export interface Interactor {
  readInput(): Promise<string>
  printMessage(message: string): void
  close(): void
}

export class ConsoleInteractor implements Interactor {
  reader: readline.Interface

  constructor() {
    this.reader = readline.createInterface(
      { input: process.stdin, output: process.stdout }
    )
  }

  async readInput(): Promise<string> {
    const res = await this.reader.question("> ")
    return res
  }


  close() {
    this.reader.close()
  }

  printMessage(message: string) {
    console.log(message)
  }
}

export default class UI {
  interactor: Interactor

  constructor(interactor: Interactor) {
    this.interactor = interactor
  }

  async mainLoop() {
    while (true) {
      const input = await this.interactor.readInput()
      if (input === 'quit') {
        this.interactor.close()
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
