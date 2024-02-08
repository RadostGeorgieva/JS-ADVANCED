import { expect } from 'chai'
import { isSymmetric } from "./5. Check for Symmetry.js";

describe('Suite', function () {
    it('returns false when non array params', () => {
        expect(isSymmetric(1)).to.be.false;
    })
    it('returns false whit [1,2,3,4,2,1]', () => {
        expect(isSymmetric([1,2,3,4,2,1])).to.be.false;
    })
    it('returns false whit [-1,2,1]', () => {
        expect(isSymmetric([-1,2,1])).to.be.false;
    })

    it('returns false when empyu', () => {
        expect(isSymmetric()).to.be.false;
    })
    it('returns == to reversed', () => {
        expect(isSymmetric([1,2,1])).to.be.true;
    })

    it('works with str', () => {
        expect(isSymmetric(["it","d","it"])).to.be.true
    })

    it('returns false with non-symetric', () => {
        expect(isSymmetric(["it","d","work"])).to.be.false
    })
    it('returns the correct length of the array', () => {
        expect([1, 2, 3]).to.have.lengthOf(3);
    });

    it("should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", function () {
        expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5])).to.be.equal(true);
    });

})