import { createCalculator } from "./7.Add-Substract.js";
import { expect } from "chai";

describe('Suite', function () {

    let counter;
    beforeEach(() => {

        counter = createCalculator();
    });

    it('begins at 0', () => {
        expect(counter.get()).to.equal(0);
    })
    it('removes correctly a number', function () {
        counter.subtract(3)
        expect(counter.get(0)).to.equal(-3);
    }) 
    it('removes correctly a string', function () {
        counter.subtract("3")
        expect(counter.get(0)).to.equal(-3);
    }) 
    it('adds correctly a string', function () {
        counter.add("3")
        expect(counter.get(0)).to.equal(3);
    }) 
    it('adds correctly a number', function () {
        counter.add(3)
        expect(counter.get(0)).to.equal(3);
    }) 
    it('returns an object', function () {
        expect(createCalculator()).to.be.a("object");
    })
    it('contains proerty add', function () {
        expect(createCalculator()).to.have.own.property('add');
    })
    it('contains proerty get', function () {
        expect(createCalculator()).to.have.own.property('get');
    })
    it('contains proerty subtract', function () {
        expect(createCalculator()).to.have.own.property('subtract');
    })
    // it('throws with provided params', function () {
    //     expect(() => createCalculator(12)).to.throw()
    // })

})