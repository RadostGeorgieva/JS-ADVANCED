import { expect } from 'chai';
import { describe, it } from 'mocha';

// The function you want to test
function add(a, b) {
    return a + b;
}

// Describe the test suite
describe("Addition function", function() {
    // Test case 1
    it("should return the sum of two numbers", function() {
        // Define inputs
        const num1 = 5;
        const num2 = 10;

        // Call the function being tested
        const result = add(num1, num2);

        // Assert the result using Chai's expect syntax
        expect(result).to.equal(15);
    });

    // Test case 2
    it("should handle negative numbers correctly", function() {
        // Define inputs
        const num1 = -5;
        const num2 = 3;

        // Call the function being tested
        const result = add(num1, num2);

        // Assert the result using Chai's expect syntax
        expect(result).to.equal(-2);
    });
});
