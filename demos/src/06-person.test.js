import { Person } from './06-person'

describe('Person class', () => {
  let person

  beforeEach(() => {
    person = new Person('Alice', 60, 1.65)
  })

  test('should return not found for negative IMC', () => {
    person.weight = -10
    person.height = 1.7

    expect(person.calcIMC()).toBe('Not found')
  })

  test('should return down', () => {
    person.weight = 45
    person.height = 1.7

    expect(person.calcIMC()).toBe('Down')
  })

  test('should return normal', () => {
    person.weight = 70
    person.height = 1.75
    expect(person.calcIMC()).toBe('Normal')
  })

  test('should return overweight', () => {
    person.weight = 75
    person.height = 1.7

    expect(person.calcIMC()).toBe('Overweight')
  })

  test('should return overweight level 1', () => {
    person.weight = 80
    person.height = 1.7

    expect(person.calcIMC()).toBe('Overweight level 1')
  })

  test('should return overweight level 2', () => {
    person.weight = 87
    person.height = 1.7

    expect(person.calcIMC()).toBe('Overweight level 2')
  })

  test('should return overweight level 3', () => {
    person.weight = 130
    person.height = 1.7

    expect(person.calcIMC()).toBe('Overweight level 3')
  })
})
