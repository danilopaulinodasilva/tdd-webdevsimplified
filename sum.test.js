const { exec } = require('child_process');
const sum = require('./sum');

test('properly adds two numbers', () => {
    expect(
        sum(1,2))
        .toBe(3)
})