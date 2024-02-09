import { validate } from "./formValidation.js";
import { expect } from "chai";

describe('validate', function() {
    describe('checkUsername', function() {
        it('should return false for username with less than 3 characters', function() {
            const result = validate.checkUsername("st");
            expect(result).to.equal(false);
        });

        it('should return true for username with 3 or more characters', function() {
            const result = validate.checkUsername("username");
            expect(result).to.equal(true);
        });

        // Add more test cases as needed
    });
});
