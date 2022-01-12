const checkFloor = require('./day1')
const checkBasement = require('./day1')


test('(()) and ()() both result in floor 0.', () => {
    let value = Array.from('(())')
    let result = checkFloor(value)
    expect(result).toBe(0)
});

test('()()) causes him to enter the basement at character position 5.', () => {
    let value = Array.from('()())')
    let result = checkBasement(value)
    expect(result).toBe(5)
});