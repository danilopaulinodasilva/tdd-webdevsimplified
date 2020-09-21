const substract = require('./substract');

test('properly substracing two numbers', () => {
    expect(
        substract(1,2))
        .toBe(-1)
});