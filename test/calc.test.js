let chai = require('chai');
let expect = require('chai').expect;
let should = chai.should();

var calc = require("../lib/calc");

describe("Calculator", function () {
    it("returns an integer", function (done) {
        expect(calc.computeResult(0, [])).to.equal(0);
        done();
    });

    it("returns zero when only 1 person", function (done) {
        expect(calc.computeResult(1, [10, 20])).to.equal(0);
        done();
    });

    it("returns 10 when there are 3 people and 60 spent", function (done) {
        expect(calc.computeResult(3, [10, 20, 30])).to.equal(10);
        done();
    })

    it("returns 12 when there are 4 people and 60 spent", function (done) {
        expect(calc.computeResult(4, [15, 15.01, 3, 3.01])).to.not.equal(11.99);
        done();
    })

    it("returns 12 when there are 4 people and 60 spent", function (done) {
        expect(calc.computeResult(4, [15, 15.01, 3, 3.01])).to.equal(12);
        done();
    })

    it("returns 11.99 when there are 4 people and 60 spent", function (done) {
        expect(calc.computeResult(4, [1.1, 1.1, 1.0, 1.1])).to.equal(0.07);
        done();
    })

    it("returns 15.67 when there are 3 people and 70 spent", function (done) {
        expect(calc.computeResult(3, [14, 17, 39])).to.equal(15.67);
        done();
    })

    it("returns 15.67 when there are 3 people and 70 spent", function (done) {
        expect(calc.computeResult(2, [18, 30, 14])).to.equal(15.67);
        done();
    })
});