// test.js
import { expect, assert } from 'chai';
import { PaymentPackage } from './PaymentPackage.js'; // Importing PaymentPackage

describe('setters and getters', function () {
    let testPackage; // Declare testPackage variable outside of individual tests

    beforeEach(function () {
        // Create a new instance of PaymentPackage before each test
        testPackage = new PaymentPackage('HR Services', 1500);
    });

    it('should set and get name property correctly', function () {
        // Test setting and getting name property
        testPackage.name = 'New Service';
        expect(testPackage.name).to.equal('New Service');
    });

    it('should set and get value property correctly', function () {
        // Test setting and getting value property
        testPackage.value = 2000;
        expect(testPackage.value).to.equal(2000);
    });

    it('should set and get VAT property correctly', function () {
        // Test setting and getting VAT property
        testPackage.VAT = 25;
        expect(testPackage.VAT).to.equal(25);
    });

    it('should set and get active property correctly', function () {
        // Test setting and getting active property
        testPackage.active = false;
        expect(testPackage.active).to.equal(false);
    });
    it('should return error with empty string with empty string', function () {
        expect(() => new PaymentPackage('', 1500)).to.throw('Name must be a non-empty string');
    })
    it('should return error with empty string with number', function () {
        expect(() => new PaymentPackage(12, 1500)).to.throw('Name must be a non-empty string');
    })
    it('should return error with non string', function () {
        testPackage.active = false;
        expect(() => new PaymentPackage('HR Services', 'invalid')).to.throw('Value must be a non-negative number');
    });
    it('should return error negative number', function () {
        testPackage.active = false;
        expect(() => new PaymentPackage('HR Services', -12)).to.throw('Value must be a non-negative number');
    });

    it('should return error with non-number VAT', function () {
        const setNonNumberVAT = () => { testPackage.VAT = "25"; };
        expect(setNonNumberVAT).to.throw('VAT must be a non-negative number');
    });
    it('should return error with negative VAT', function () {
        const setNonNumberVAT = () => { testPackage.VAT = -25; };
        expect(setNonNumberVAT).to.throw('VAT must be a non-negative number');
    });
    it('should return error non boolean active status', function () {
        const nonBoolActiveStatus = () => { testPackage.active = 25; };
        expect(nonBoolActiveStatus).to.throw('Active status must be a boolean');
    });
    it('should return error non boolean true active status', function () {
        const nonBoolActiveStatus = () => { testPackage.active = "true"; };
        expect(nonBoolActiveStatus).to.throw('Active status must be a boolean');
    });
    it('should return the correct string representation', function() {
        const testPackage = new PaymentPackage('HR Services', 1500);
        
        // Modify properties for specific test case
        testPackage.active = false;
        testPackage.VAT = 25;
        
        // Calculate expected output
        const expectedOutput = `Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 25%): 1875`;
        
        // Assert that toString() returns the expected output
        expect(testPackage.toString()).to.equal(expectedOutput);
    });
    it('should have default VAT and active values when not provided', function () {
        const defaultPackage = new PaymentPackage('Default Package', 2000);
        expect(defaultPackage.VAT).to.equal(20);
        expect(defaultPackage.active).to.equal(true);
    });
    it('Set value to null', () => {
        let instance = new PaymentPackage('Name', 100);
        assert.doesNotThrow(() => { instance.value = 0 })
});

    
})