import { petAdoptionAgency } from "./petAdoptionAgency.js";
import { expect } from "chai";

describe("isPetAvailable", function () {
    it('returns 3, vaccinated', function () {
        expect(petAdoptionAgency.isPetAvailable('Dog', 3, true)).to.equal(`Great! We have 3 vaccinated Dog(s) available for adoption at the agency.`)
    })
    it('returns 10, not vaccinated', function () {
        expect(petAdoptionAgency.isPetAvailable('Dog', 10, false)).to.equal(`Great! We have 10 Dog(s) available for adoption, but they need vaccination.`)
    })
    it('returns sorry, count 0, true', function () {
        expect(petAdoptionAgency.isPetAvailable('Dog', 0, true)).to.equal(`Sorry, there are no Dog(s) available for adoption at the agency.`)
    })
    it('returns sorry, count 0, false', function () {
        expect(petAdoptionAgency.isPetAvailable('Dog', 0, false)).to.equal(`Sorry, there are no Dog(s) available for adoption at the agency.`)
    })
    it('returns error with array as first param', function () {
        expect(() => petAdoptionAgency.isPetAvailable(['Dog'], 0, false)).to.throw(`Invalid input`)
    })
    it('returns error with str as 2 param', function () {
        expect(() => petAdoptionAgency.isPetAvailable('Dog', "12", false)).to.throw(`Invalid input`)
    })
    it('returns error with string as third', function () {
        expect(() => petAdoptionAgency.isPetAvailable('Dog', 12, "true")).to.throw(`Invalid input`)
    })
    it('returns error with 0 as third', function () {
        expect(() => petAdoptionAgency.isPetAvailable('Dog', 12, 0)).to.throw(`Invalid input`)
    })
})
describe("getRecommendedPets", function () {
    it('returns 2 pets with valid', function () {
        expect(petAdoptionAgency.getRecommendedPets([{ name: "cat", traits: "To Listen" }, { name: "dog", traits: "To Listen" }, { name: "cat", traits: "To NOT Listen" }], 'To Listen')).to.equal(`Recommended pets with the desired traits (To Listen): cat, dog`)

    })
    it('returns 1 pets with valid', function () {
        expect(petAdoptionAgency.getRecommendedPets([{ name: "cat", traits: "meaw" }], 'meaw')).to.equal(`Recommended pets with the desired traits (meaw): cat`)

    })
    it('returns sorry, with valid', function () {
        expect(petAdoptionAgency.getRecommendedPets([{ name: "cat", traits: "baw" }], 'meaw')).to.equal(`Sorry, we currently have no recommended pets with the desired traits: meaw.`)

    })
    it('returns sorry, with valid empty', function () {
        expect(petAdoptionAgency.getRecommendedPets([], 'meaw')).to.equal(`Sorry, we currently have no recommended pets with the desired traits: meaw.`)

    })
    it('returns err with obj and str', function () {
        expect(() => petAdoptionAgency.getRecommendedPets({ name: "cat", traits: "baw" }, 'meaw')).to.throw(`Invalid input`)

    })
    it('returns err with str and str', function () {
        expect(() => petAdoptionAgency.getRecommendedPets(`name:"cat", traits:"baw"`, 'meaw')).to.throw(`Invalid input`)

    })
    it('returns err with arr and bool', function () {
        expect(() => petAdoptionAgency.getRecommendedPets([{ name: "cat", traits: "baw" }], true)).to.throw(`Invalid input`)

    })
    it('returns err with arr and arr', function () {
        expect(() => petAdoptionAgency.getRecommendedPets([{ name: "cat", traits: "baw" }], ["baw"])).to.throw(`Invalid input`)

    })
    it('returns err with arr and numb', function () {
        expect(() => petAdoptionAgency.getRecommendedPets([{ name: "cat", traits: "baw" }], 12)).to.throw(`Invalid input`)

    })
});

describe("adoptPet", function () {
    it('returns message with valid', function () {
        expect(petAdoptionAgency.adoptPet("cat", 'Radost')).to.equal(`Congratulations, Radost! You have adopted cat from the agency. Enjoy your time with your new furry friend!`)
    })
    it('return err with bool first', function () {
        expect(() => petAdoptionAgency.adoptPet(true, 'Radost')).to.throw("Invalid input")

    })
    it('return err with arr second', function () {
        expect(() => petAdoptionAgency.adoptPet("cat", ['Radost'])).to.throw("Invalid input")

    })
    it('return err with number second', function () {
        expect(() => petAdoptionAgency.adoptPet(0, 12)).to.throw("Invalid input")

    })

})