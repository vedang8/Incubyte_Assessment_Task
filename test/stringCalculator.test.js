const StringCalculator = require('../src/stringCalculator');

describe('StringCalculator', () => {

    // Simple Test Case: Empty String
    test('Input: Empty String | Output: 0', () => {
        const calculator = new StringCalculator();
        expect(calculator.add("")).toBe(0);
    });
    
    // Simple Test Case: Sum of Two numbers
    test('Input: Two numbers separated by a single delimeter | Output: sum of two numbers', () => {
        const calculator = new StringCalculator();
        expect(calculator.add("1,5")).toBe(6);
    });
});