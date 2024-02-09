import { lookupChar } from "./3.charLookup.js";
import { expect } from "chai";

describe('Suite', function () {
    it('returns undefined if str is number', function () {

        expect(lookupChar(1, 1)).to.equal(undefined)
    })
    it('returns undefined if index is string', function () {

        expect(lookupChar("str", "1")).to.equal(undefined)
    })
    it('returns undefined if index is float', function () {

        expect(lookupChar("str", 1.1)).to.equal(undefined)
    })
    it('returns undefined if index is float', function () {

        expect(lookupChar("str", 1.0)).to.equal(undefined)
    })
    it('returns Incorrect index with correct data, -1 index', function () {

        expect(lookupChar("str", -1)).to.equal("Incorrect index")
    })
    it('returns Incorrect index with correct data, str.length index', function () {

        expect(lookupChar("str", 3)).to.equal("Incorrect index")
    })
    it('returns Incorrect index with correct data, str.length+1 index', function () {

        expect(lookupChar("str", 4)).to.equal("Incorrect index")
    })
    it('returns s at index 0', function () {

        expect(lookupChar("str", 0)).to.equal("s")
    })
    it('returns " " at index 3', function () {

        expect(lookupChar("str sadsa", 3)).to.equal(" ")
    })
    it('returns incorrect index if emtpy str', function () {

        expect(lookupChar("", 0)).to.equal("Incorrect index")
    })
})