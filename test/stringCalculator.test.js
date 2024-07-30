const StringCalculator = require('../src/stringCalculator');

describe('StringCalculator', () => {

    // Simple Test Case: Empty String
    test('Input: Empty String | Output: 0', () => {
        const calculator = new StringCalculator();
        expect(calculator.add("")).toBe(0);
    });
    
    // Simple Test Case: String having a number
    test('Input: String having a number | Output: number', () => {
        const calculator = new StringCalculator();
        expect(calculator.add("100")).toBe(100);
    });

    // Simple Test Case: Sum of Two numbers
    test('Input: Two numbers separated by a single delimeter | Output: sum of two numbers', () => {
        const calculator = new StringCalculator();
        expect(calculator.add("1,5")).toBe(6);
    });

    // Test Case: Comma separated numbeRS
    test('Input: Comma separated numbers | Output: Sum of numbers', () => {
        const calculator = new StringCalculator();
        expect(calculator.add("1,5,20,100")).toBe(126);
    });

    // Test Case: Comma and Newline separated numbeRS
    test('Input: Comma and Newline separated numbers | Output: Sum of numbers', () => {
        const calculator = new StringCalculator();
        expect(calculator.add("1,5\n50,100\n100,2")).toBe(258);
    });

});