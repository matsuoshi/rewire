const rewire = require('rewire')
const myModule = rewire('../src/private')

test('exported function', () => {
  const sum = myModule.__get__('privateSum')
  expect(sum(1, 2)).toBe(3)
})
