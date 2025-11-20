const sum = (a: number, b: number): number => {
  return a + b
}

const subtract = (a: number, b: number): number => {
  return a - b
}

const multiply = (a: number, b: number): number => {
  return a * b
}

const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error('Cannot divide by zero')
  }
  return a / b
}

const secondsConverter = (seconds: number): string => {
  const [h, m, s] = [Math.floor(seconds / 3600), Math.floor(seconds / 60) % 60, seconds % 60].map((n) => n.toString().padStart(2, '0'))

  return [h, m, s].join(':')
}

export { sum, subtract, multiply, divide, secondsConverter }
