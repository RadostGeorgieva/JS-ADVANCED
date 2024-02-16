// test.js
import { expect } from 'chai';
import { findNewApartment } from './findApartment.js';

describe('isGoodLocation', function () {

    it('works with Sofia', function () {
        expect(findNewApartment.isGoodLocation("Sofia",true)).to.equal("You can go on home tour!");
    })
    it('works with Plovdiv', function () {
        expect(findNewApartment.isGoodLocation("Plovdiv",true)).to.equal("You can go on home tour!");
    })
    it('works with Varna', function () {
        expect(findNewApartment.isGoodLocation("Varna",true)).to.equal("You can go on home tour!");
    })

    it('works with Sofia', function () {
        expect(findNewApartment.isGoodLocation("Sofia",false)).to.equal("There is no public transport in area.");
    })
    it('works with Plovdiv', function () {
        expect(findNewApartment.isGoodLocation("Plovdiv",false)).to.equal("There is no public transport in area.");
    })
    it('works with Varna', function () {
        expect(findNewApartment.isGoodLocation("Varna",false)).to.equal("There is no public transport in area.");
    })

    it('wrong city', function () {
        expect(findNewApartment.isGoodLocation("Popovo",false)).to.equal("This location is not suitable for you.");
    })
    
    it('wrong city', function () {
        expect(findNewApartment.isGoodLocation("Popovo",true)).to.equal("This location is not suitable for you.");
    })
    it('not bool', function () {
        expect(() => {findNewApartment.isGoodLocation("Sofia","yes")}).to.throw("Invalid input!");
    })
    it('not bool', function () {
        expect(() => {findNewApartment.isGoodLocation("Sofia",0)}).to.throw("Invalid input!");
    })
    it('array as city', function () {
        expect(() => {findNewApartment.isGoodLocation(["Sofia"],true)}).to.throw("Invalid input!");
    })
});
describe('isLargeEnough', function () {
    it('works with sqm in arr and number in minimal', function () {
        expect(findNewApartment.isLargeEnough([40,50,60],40)).to.equal("40, 50, 60");
    })
    it('works with sqm in arr and number in minimal', function () {
        expect(findNewApartment.isLargeEnough([40,50,60],60)).to.equal("60");
    })
    it('works with sqm in arr and number in minimal but no valid', function () {
        expect(findNewApartment.isLargeEnough([40,50,60],70)).to.equal("");
    })
    it('works with equal', function () {
        expect(findNewApartment.isLargeEnough([70],70)).to.equal("70");
    })
    it('error if not arr', function () {
        expect(() => {findNewApartment.isLargeEnough("70",70)}).to.throw("Invalid input!");
    })
    it('error if empty arr', function () {
        expect(() => {findNewApartment.isLargeEnough([],70)}).to.throw("Invalid input!");
    })
    it('error if not number', function () {
        expect(() => {findNewApartment.isLargeEnough([40,50,60],"70")}).to.throw("Invalid input!");
    })
    it('error if string second param', function () {
        expect(() => {findNewApartment.isLargeEnough([40,50,60],"false")}).to.throw("Invalid input!");
    })
  
});
describe('isItAffordable', function () {
    it('works with bigger budget', function () {
        expect(findNewApartment.isItAffordable(100,150)).to.equal("You can afford this home!");
    })
    it('works with smaller budget', function () {
        expect(findNewApartment.isItAffordable(299,150)).to.equal("You don't have enough money for this house!");
    })
    it('budget not a number', function () {
        expect(() => {findNewApartment.isItAffordable(299,"155")}).to.throw("Invalid input!");
    })
    it('budget arr', function () {
        expect(() => {findNewApartment.isItAffordable(299,[155])}).to.throw("Invalid input!");
    })
    it('budget 0', function () {
        expect(() => {findNewApartment.isItAffordable(299,0)}).to.throw("Invalid input!");
    })
    it('budget -150', function () {
        expect(() => {findNewApartment.isItAffordable(299,-150)}).to.throw("Invalid input!");
    })
    it('price not a number', function () {
        expect(() => {findNewApartment.isItAffordable("299",155)}).to.throw("Invalid input!");
    })
    it('price arr', function () {
        expect(() => {findNewApartment.isItAffordable([299],155)}).to.throw("Invalid input!");
    })
    it('price 0', function () {
        expect(() => {findNewApartment.isItAffordable(0,300)}).to.throw("Invalid input!");
    })
    it('price -150', function () {
        expect(() => {findNewApartment.isItAffordable(-150,100)}).to.throw("Invalid input!");
    })
});
