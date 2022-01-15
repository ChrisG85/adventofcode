const checkFloor = require('./day1')
const checkBasement = require('./day1')


test('(()) and ()() both result in floor 0.', () => {
    let result = checkFloor('(())')
    expect(result).toBe(0)
});

test('()()) causes him to enter the basement at character position 5.', () => {
    let result = checkBasement('()())')
    expect(result).toBe(5)
});