export class Person {
  constructor(name, weight, height) {
    this.name = name
    this.weight = weight
    this.height = height
  }

  calcIMC() {
    const result = Math.round(this.weight / (this.height * this.height))

    if (result >= 0 && result < 18) {
      return 'Down'
    }
    if (result >= 18 && result <= 24) {
      return 'Normal'
    }
    if (result >= 25 && result <= 26) {
      return 'Overweight'
    }
    if (result >= 27 && result <= 29) {
      return 'Overweight level 1'
    }
    if (result >= 30 && result <= 39) {
      return 'Overweight level 2'
    }
    if (result >= 40) {
      return 'Overweight level 3'
    }
    return 'Not found'
  }
}
