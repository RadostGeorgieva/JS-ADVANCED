import { isOddOrEven } from "./2.OddOrEven.js";
import { expect } from "chai";

describe('Suite', function() {
    it('returns undefined with number', function () {
        expect(isOddOrEven(1)).to.equal(undefined)
    })
    it('returns undefined with undefined', function () {
        expect(isOddOrEven(undefined)).to.equal(undefined)
    })
    it('returns even with even length string', function () {
        expect(isOddOrEven("stri")).to.equal("even")
    })
    it('returns odd with odd length string', function () {
        expect(isOddOrEven("str")).to.equal("odd")
    })
})