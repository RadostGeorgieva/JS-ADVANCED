import { mathEnforcer} from "./4. Math Enforcer.js";
import { expect } from "chai";

describe ('mathEnforcer', function () {
    describe('addFive', function () {
        it('returns unefined with string', function() {
            expect(mathEnforcer.addFive("str")).to.equal(undefined);
        })
        it('returns unefined with number as string', function() {
            expect(mathEnforcer.addFive("5")).to.equal(undefined);
        })
        it('returns 10 with 5', function() {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        })
        it('returns 5 with 0', function() {
            expect(mathEnforcer.addFive(0)).to.equal(5);
        })
        it('returns 0 with -5', function() {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        })
        it('works with decimals', function() {
            expect(mathEnforcer.addFive(-0.5)).to.equal(4.5,0.1);
        })
    })
    describe('subtractTen', function () {
        it('returns unefined with string', function() {
            expect(mathEnforcer.subtractTen("str")).to.equal(undefined);
        })
        it('returns unefined with number as string', function() {
            expect(mathEnforcer.subtractTen("5")).to.equal(undefined);
        })
        it('returns -20 with -10', function() {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        })
        it('returns -10 with 0', function() {
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
        })
        it('returns 20 with 30', function() {
            expect(mathEnforcer.subtractTen(30)).to.equal(20);
        })
        it('works with decimals', function() {
            expect(mathEnforcer.subtractTen(-0.5)).to.equal(-10.5,0.1);
        })
    })
    describe('sum', function () {
        it('returns udnefined with string as first parameter', function() {
            expect(mathEnforcer.sum("str",5)).to.equal(undefined);
        })
        it('returns udnefined with string as second parameter', function() {
            expect(mathEnforcer.sum(5,"str")).to.equal(undefined);
        })
        it('returns udnefined with  number string as second parameter', function() {
            expect(mathEnforcer.sum(5,"5")).to.equal(undefined);
        })
        it('returns udnefined with  number string as first parameter', function() {
            expect(mathEnforcer.sum("5",5)).to.equal(undefined);
        })
        it('returns udnefined with 1 parameter ', function() {
            expect(mathEnforcer.sum(5)).to.equal(undefined);
        })
        it('returns -10 with -5 and -5', function() {
            expect(mathEnforcer.sum(-5,-5)).to.equal(-10);
        })
        it('works with decimals as second parameter', function() {
            expect(mathEnforcer.sum(10, 0.5)).to.be.closeTo(10.5,0.1);
        })
        it('works with decimals as first parameter', function() {
            expect(mathEnforcer.sum(0.5, 10)).to.be.closeTo(10.5,0.1);
        })
        it('returns 0 with 0 and 0', function() {
            expect(mathEnforcer.sum(0,0)).to.equal(0);
        })
    })
})