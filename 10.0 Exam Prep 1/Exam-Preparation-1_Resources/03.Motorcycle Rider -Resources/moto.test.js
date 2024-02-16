import { motorcycleRider } from "./Motorcycle Rider.js";
import { expect } from "chai"; 
describe("testing licenseRestriction …", function () {
    it('licenseRestriction', function () {
        debugger
        expect(() => {motorcycleRider.licenseRestriction('B')}).to.throw('Invalid Information!');
        expect(() => {motorcycleRider.licenseRestriction('A3')}).to.throw('Invalid Information!');
        expect(motorcycleRider.licenseRestriction('AM')).to.equal("Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.");
        expect(motorcycleRider.licenseRestriction("A1")).to.equal("Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.");
        expect(motorcycleRider.licenseRestriction("A2")).to.equal("Motorcycles with maximum power of 35KW. and the minimum age is 18.");
        expect(motorcycleRider.licenseRestriction("A")).to.equal("No motorcycle restrictions, and the minimum age is 24.");
        expect(() => { motorcycleRider.licenseRestriction(12) }).to.throw('Invalid Information!');
    });

});
describe("testing motorcycleShowroom …", function () {
    it('motorcycleShowroom', function () {
        expect(() => motorcycleRider.motorcycleShowroom([],55)).to.throw('Invalid Information!');
        expect(() => motorcycleRider.motorcycleShowroom(["123","200"],"55")).to.throw('Invalid Information!');
        expect(() => motorcycleRider.motorcycleShowroom(["123","200"])).to.throw('Invalid Information!');
        expect(() => motorcycleRider.motorcycleShowroom(55)).to.throw('Invalid Information!');
        expect(() => motorcycleRider.motorcycleShowroom(["200","200"],49)).to.throw('Invalid Information!');
        expect(() => motorcycleRider.motorcycleShowroom(["200","200"],-50)).to.throw('Invalid Information!');
        expect(() => motorcycleRider.motorcycleShowroom(["200","200"],"fifty")).to.throw('Invalid Information!');
        expect(() => motorcycleRider.motorcycleShowroom("200",350)).to.throw('Invalid Information!');
        expect(motorcycleRider.motorcycleShowroom(["50"],50)).to.equal(`There are ${1} available motorcycles matching your criteria!`);
        expect(motorcycleRider.motorcycleShowroom(["50","200","150"],300)).to.equal(`There are ${3} available motorcycles matching your criteria!`);
        expect(motorcycleRider.motorcycleShowroom(["40","200","150"],300)).to.equal(`There are ${2} available motorcycles matching your criteria!`);
        expect(motorcycleRider.motorcycleShowroom([0],300)).to.equal(`There are ${0} available motorcycles matching your criteria!`);
        expect(motorcycleRider.motorcycleShowroom(["50","200","150","150","no"],300)).to.equal(`There are ${4} available motorcycles matching your criteria!`);
    });

    it('should filter engine volumes correctly', () => {
        const engineVolume = [40, 60, 70, 80, 90];
        const maximumEngineVolume = 80;
        let availableBikes = [];
        engineVolume.forEach((engine) => {
            if (engine <= maximumEngineVolume && engine >= 50) {
                availableBikes.push(engine);
            }
        });
        expect(availableBikes).to.deep.equal([60, 70, 80]);
    });
    it('should filter engine volumes correctly and return empty arr', () => {
        const engineVolume = [40, 60, 70, 80, 90];
        const maximumEngineVolume = 50;
        let availableBikes = [];
        engineVolume.forEach((engine) => {
            if (engine <= maximumEngineVolume && engine >= 50) {
                availableBikes.push(engine);
            }
        });
        expect(availableBikes).to.deep.equal([]);
    });
    it('should filter engine volumes correctly', () => {
        const engineVolume = [40, 60, 70, 80, 90];
        const maximumEngineVolume = 50;
        let availableBikes = [];
        engineVolume.forEach((engine) => {
            if (engine <= maximumEngineVolume && engine >= 50) {
                availableBikes.push(engine);
            }
        });
        expect(availableBikes).to.deep.equal([]);
    });
})
describe("testing otherSpendings …", function () {
    it('should return eror with 3 arrays', function () {
        expect(() => motorcycleRider.otherSpendings(["helmet"],["engine oil"], ["helmet"])).to.throw('Invalid Information!');
        expect(() => motorcycleRider.otherSpendings(["helmet"],true,true)).to.throw('Invalid Information!');
        expect(motorcycleRider.otherSpendings(["helmet"],["engine oil"], false)).to.equal("You spend $270.00 for equipment and consumables!");
        //expect(() => motorcycleRider.otherSpendings(false,["engine oil"], false)).to.equal("You spend $270.00 for equipment and consumables with 10% discount!");
        expect(() => motorcycleRider.otherSpendings("",["engine oil"], false)).to.throw('Invalid Information!');
        //expect(() => motorcycleRider.otherSpendings(["helmet"],false, ["engine oil"])).to.equal("You spend $270.00 for equipment and consumables with 10% discount!");
        expect( motorcycleRider.otherSpendings(["helmet"],["engine oil"], true)).to.equal("You spend $243.00 for equipment and consumables with 10% discount!");
        expect(motorcycleRider.otherSpendings(["helmet", "jacked"],["engine oil"], false)).to.equal("You spend $570.00 for equipment and consumables!");
        expect(motorcycleRider.otherSpendings(["helmet", "jacked"],["engine oil","oil filter"], false)).to.equal("You spend $600.00 for equipment and consumables!");
        expect(motorcycleRider.otherSpendings([],["engine oil"], false)).to.equal("You spend $70.00 for equipment and consumables!");
        expect(() =>motorcycleRider.otherSpendings("helmet",["engine oil"], false)).to.throw('Invalid Information!');
    });
})