import { planYourTrip } from "./02.unit test.js";
import { expect } from "chai";

describe("planYourTrip", function () {
    describe("choosingDestination", function () {
        it("great choice with winter, 2024 and ski resoty", function () {
            expect(planYourTrip.choosingDestination('Ski Resort', "Winter", 2024)).to.equal(`Great choice! The Winter is the perfect time to visit the Ski Resort.`)
        });
        it("consider winter, with summer, 2024 and ski resoty", function () {
            expect(planYourTrip.choosingDestination('Ski Resort', "Summer", 2024)).to.equal(`Consider visiting during the Winter for the best experience at the Ski Resort.`)
        });
        it("wrong year 2023", function () {
            expect(() => planYourTrip.choosingDestination('Ski Resort', "Winter", 2023)).to.throw(`Invalid Year!`)
        });
        it("wrong destination bulgaria", function () {
            expect(() => planYourTrip.choosingDestination('Bulgaria', "Winter", 2024)).to.throw(`This destination is not what you are looking for.`)
        });
        it("ski resort lower lett", function () {
            expect(() => planYourTrip.choosingDestination('ski resort', "Winter", 2024)).to.throw(`This destination is not what you are looking for.`)
        });
        it("consider winter, with winter smaller, 2024 and ski resoty", function () {
            expect(planYourTrip.choosingDestination('Ski Resort', "winter", 2024)).to.equal(`Consider visiting during the Winter for the best experience at the Ski Resort.`)
        });
        it("0 year", function () {
            expect(() => planYourTrip.choosingDestination('ski resort', "Winter", 0)).to.throw(`Invalid Year!`)
        });
    });
    describe("exploreOptions ", function () {
        it("removes ok at 0", function () {
            expect(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 0)).to.equal(`Snowboarding, Winter Hiking`)
        });
        it("removes at length-1(2)", function () {
            expect(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 2)).to.equal(`Skiing, Snowboarding`)
        });
        it("removes at 0 with 0", function () {
            expect(planYourTrip.exploreOptions(["Skiing"], 0)).to.equal(``)
        });
        it("throws with str", function () {
            expect(() => planYourTrip.exploreOptions('ski resort', 0)).to.throw(`Invalid Information!`)
        });
        it("throws with str second", function () {
            expect(() => planYourTrip.exploreOptions(['ski resort'], "0")).to.throw(`Invalid Information!`)
        });
        it("throws with -1", function () {
            expect(() => planYourTrip.exploreOptions(['ski resort'], -1)).to.throw(`Invalid Information!`)
        });
        it("throws with 2", function () {
            expect(() => planYourTrip.exploreOptions(['ski resort', "bla bla"], 2)).to.throw(`Invalid Information!`)
        });
        it("throws with 0.1", function () {
            expect(() => planYourTrip.exploreOptions(['ski resort', "bla bla"], 0.1)).to.throw(`Invalid Information!`)
        });
        it("throws with number, 0", function () {
            expect(() => planYourTrip.exploreOptions(0, 0)).to.throw(`Invalid Information!`)
        });
        it("throws with both wrong", function () {
            expect(() => planYourTrip.exploreOptions(0, "")).to.throw(`Invalid Information!`)
        });
        it("throws with str", function () {
            expect(() => planYourTrip.exploreOptions(['ski resort', "bla bla"], "")).to.throw(`Invalid Information!`)
        });
        it("throws with empty str", function () {
            expect(() => planYourTrip.exploreOptions([], 0)).to.throw(`Invalid Information!`)
        });
    });
    describe("estimateExpenses", function () {
        it("returns bufget frendly at 500", function () {
            expect(planYourTrip.estimateExpenses(250, 2)).to.equal(`The trip is budget-friendly, estimated cost is $500.00.`)
        });
        it("returns bufget frendly at 375 with 1.5", function () {
            expect(planYourTrip.estimateExpenses(250, 1.5)).to.equal(`The trip is budget-friendly, estimated cost is $375.00.`)
        });
        it("returns bufget frendly at 375.75 with 1.5", function () {
            expect(planYourTrip.estimateExpenses(250.50, 1.5)).to.equal(`The trip is budget-friendly, estimated cost is $375.75.`)
        });
        it("plan at 325.75 with 2", function () {
            expect(planYourTrip.estimateExpenses(250.50, 2)).to.equal(`The estimated cost for the trip is $501.00, plan accordingly.`)
        });
        it("plan at 1000 with 1.5", function () {
            expect(planYourTrip.estimateExpenses(1000, 1.5)).to.equal(`The estimated cost for the trip is $1500.00, plan accordingly.`)
        });
        it("throws with non numbers first", function () {
            expect(() => planYourTrip.estimateExpenses("1000", 1.5)).to.throw(`Invalid Information!`)
        });
        it("throws with non numbers first 2 ", function () {
            expect(() => planYourTrip.estimateExpenses("", 1.5)).to.throw(`Invalid Information!`)
        });
        it("throws with negative first ", function () {
            expect(() => planYourTrip.estimateExpenses(-50, 1.5)).to.throw(`Invalid Information!`)
        });
        it("throws with 0 first ", function () {
            expect(() => planYourTrip.estimateExpenses(0, 1.5)).to.throw(`Invalid Information!`)
        });
        it("throws with 0 2 ", function () {
            expect(() => planYourTrip.estimateExpenses(150, 0)).to.throw(`Invalid Information!`)
        });
        it("throws with negative 2 ", function () {
            expect(() => planYourTrip.estimateExpenses(50, -1.5)).to.throw(`Invalid Information!`)
        });
        it("throws with negative 2 ", function () {
            expect(() => planYourTrip.estimateExpenses(50, -1)).to.throw(`Invalid Information!`)
        });
        it("throws with negative 2 ", function () {
            expect(() => planYourTrip.estimateExpenses(50, 0)).to.throw(`Invalid Information!`)
        });
        it("throws with arr ", function () {
            expect(() => planYourTrip.estimateExpenses([50], 2)).to.throw(`Invalid Information!`)
        });
        it("throws with arr ", function () {
            expect(() => planYourTrip.estimateExpenses(50, [2])).to.throw(`Invalid Information!`)
        });
        it("throws with str ", function () {
            expect(() => planYourTrip.estimateExpenses(50, "2")).to.throw(`Invalid Information!`)
        });
        it("throws with str ", function () {
            expect(() => planYourTrip.estimateExpenses(50)).to.throw(`Invalid Information!`)
        })
    });
});
