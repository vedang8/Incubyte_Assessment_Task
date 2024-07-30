const StringCalculator = require('../src/stringCalculator');

describe('StringCalculator', () => {

    // Simple Test Case: Empty String
    test('Input: Empty String | Output: 0', () => {
        const calculator = new StringCalculator();
        expect(calculator.add("")).toBe(0);
    });
    
});