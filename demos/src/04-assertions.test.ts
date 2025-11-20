import { expect, test } from '@jest/globals'

/** Matchers */
test('test obj', () => {
  const data = { name: 'Rigo', lastName: '' }
  data.lastName = 'Molina'
  expect(data).toEqual({ name: 'Rigo', lastName: 'Molina' })
})
test('null', () => {
  const data = null
  expect(data).toBeNull()
  expect(data).toBeDefined()
  expect(data).not.toBeUndefined()
})

test('booleans', () => {
  expect(true).toEqual(true)
  expect(false).toEqual(false)
  expect(0).toBeFalsy()
  expect('').toBeFalsy()
  expect(false).toBeFalsy()
  expect(1).toBeTruthy()
})

test('string', () => {
  expect('Christoph').toMatch(/stop/)
})

test('list / arrays', () => {
  const numbers = [1, 2, 3, 4]
  expect(numbers).toContain(3)
})

test('comparing numbers', () => {
  const value = 2 + 2
  expect(value).toBeGreaterThan(3)
  expect(value).toBeGreaterThanOrEqual(3.5)
  expect(value).toBeLessThan(5)
  expect(value).toBeLessThanOrEqual(4.5)
  expect(value).toBe(4)
  expect(value).toEqual(4)
})

test('comparing float', () => {
  const value = 3.5 + 4.2
  expect(value).toBeCloseTo(7.7)
})

function formComplete() {
  throw new Error('You have not completed the form')
}

test('exception error', () => {
  expect(() => formComplete()).toThrow()
  expect(() => formComplete()).toThrow(Error)

  expect(() => formComplete()).toThrow('You have not completed the form')
  expect(() => formComplete()).toThrow(/not completed/)
})
