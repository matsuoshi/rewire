const sum = require('../src/exported')

test('exported function', () => {
  expect(sum(1, 2)).toBe(3)
})
