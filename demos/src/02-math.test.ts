import { expect, test } from '@jest/globals'
import { sum, subtract, multiply, divide, secondsConverter } from './02-math'

describe('Math', () => {
  describe('sum', () => {
    test('add 1 + 3 to equal 4', () => {
      expect(sum(1, 3)).toBe(4)
    })

    test('add -1 + -1 to equal -2', () => {
      expect(sum(-1, -1)).toBe(-2)
    })
  })

  describe('subtract', () => {
    test('subtract 5 - 2 to equal 3', () => {
      expect(subtract(5, 2)).toBe(3)
    })

    test('subtract 2 - 5 to equal -3', () => {
      expect(subtract(2, 5)).toBe(-3)
    })
  })

  describe('multiply', () => {
    test('multiply 4 * 3 to equal 12', () => {
      expect(multiply(4, 3)).toBe(12)
    })

    test('multiply -2 * 3 to equal -6', () => {
      expect(multiply(-2, 3)).toBe(-6)
    })
  })
})

describe('divide', () => {
  test('divide 10 / 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5)
  })

  test('divide by zero should throw error', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero')
  })

  describe('second converter', () => {
    test('Convert seconds to hours, minutes and seconds', () => {
      expect(secondsConverter(3600)).toBe('01:00:00')

      expect(secondsConverter(3665)).toBe('01:01:05')

      expect(secondsConverter(7322)).toBe('02:02:02')
    })
  })
})
