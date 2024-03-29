import { Calculator } from "../src/classes";
import {equal} from "assert";
import { ADD_ERROR, DIVISION_ERROR, DIVISION_WARNING, MULTIPLICATE_ERROR, SUBTRACTION_ERROR } from "../src/constants";
import {expect} from "chai";

const thisCalculator = new Calculator();

describe("Testing the number addition method", () => {
    it ("Should correctly add two positive numbers",() => {
        equal(thisCalculator.getAdditionResult(100000000,20000), 100020000, ADD_ERROR);
    })

    it ("Should correctly add two negative numbers",() => {
        equal(thisCalculator.getAdditionResult(-26,-158), -184, ADD_ERROR);
    })

    it ("Should correctly add negative and positive numbers",() => {
        equal(thisCalculator.getAdditionResult(-26,45),19, ADD_ERROR)
    })

describe("Testing the number subtraction method", () => { 
    it ("Should correctly subtract positive number and zero",() => {
        equal(thisCalculator.getSubtractionResult(256,0), 256, SUBTRACTION_ERROR);
    })
    it ("Should correctly subtract negative and positive numbers",() => {
        equal(thisCalculator.getSubtractionResult(-25,19), -44, SUBTRACTION_ERROR);
    })
})

describe("Testing the number multiplication method", () => { 
    it ("Should correctly multiply positive number and zero",() => {
        equal(thisCalculator.getMultiplicationResult(256,0), 0, MULTIPLICATE_ERROR);
    })
    it ("Should correctly multiply negative and positive numbers",() => {
        equal(thisCalculator.getMultiplicationResult(-25,236), -5900, MULTIPLICATE_ERROR);
    })
})

describe("Testing the number division method", () => { 
    it ("Should correctly divide positive number and zero",() => {
        equal(thisCalculator.getDivisionResult(256,0), DIVISION_WARNING, DIVISION_ERROR);
    })
    it ("Should correctly divide negative and positive numbers",() => {
        expect (thisCalculator.getDivisionResult(-24,4)).to.be.equal(-6);
    })
    it ("Should correctly divide zero and negative number",() => {
        equal(thisCalculator.getDivisionResult(0,-150000000000.23),-0, DIVISION_ERROR);
    })
})
})
