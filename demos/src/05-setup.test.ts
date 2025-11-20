import { describe, expect, test } from '@jest/globals'

describe('Setup test suite', () => {
  beforeAll(() => {
    console.log('beforeAll')
  })

  afterAll(() => {
    console.log('afterAll')
  })

  beforeEach(() => {
    console.log('beforeEach')
  })
  afterEach(() => {
    console.log('afterEach')
  })

  test('case 1', () => {
    expect(1 + 1).toBe(2)
  })

  test('case 2', () => {
    expect('Hello'.toUpperCase()).toBe('HELLO')
  })

  test('case 3', () => {
    expect([1, 2, 3].length).toBe(3)
  })

  describe('Nested describe block', () => {
    test('nested case 1', () => {
      expect(Math.max(5, 10)).toBe(10)
    })

    test('nested case 2', () => {
      expect({ a: 1, b: 2 }).toHaveProperty('a')
    })
  })
})
