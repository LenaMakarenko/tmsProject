import { Calculator } from "../src/classes";
import {equal} from "assert";
import { ADD_ERROR, DIVISION_ERROR, MULTIPLICATE_ERROR, SUBTRACTION_ERROR } from "../src/constants";
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
        expect (thisCalculator.getAdditionResult(-26,45)).to.be.equal(19), ADD_ERROR;
    })
})

describe("Testing the number subtraction method", () => { 
    it ("Should correctly subtract two positive numbers",() => {
        equal(thisCalculator.getSubtractionResult(256,0), 256, SUBTRACTION_ERROR);
    })
    it ("Should correctly subtract positive and negatve numbers",() => {
        equal(thisCalculator.getSubtractionResult(-25,19), -44, SUBTRACTION_ERROR);
    })
})

describe("Testing the number multiplication method", () => { 
    it ("Should correctly multiply positive number and zero",() => {
        equal(thisCalculator.getMultiplicationResult(256,0), 0, MULTIPLICATE_ERROR);
    })
    it ("Should correctly multiply positive and negatve numbers",() => {
        equal(thisCalculator.getMultiplicationResult(-25,236), -5900, MULTIPLICATE_ERROR);
    })
})

describe("Testing the number division method", () => { 
    it ("Should correctly divide positive number and zero",() => {
        equal(thisCalculator.getDivisionResult(256,0), "Can't divide by zero!", DIVISION_ERROR);
    })
    it ("Should correctly divide positive and negatve numbers",() => {
        equal(thisCalculator.getDivisionResult(-24,4), -6, DIVISION_ERROR);
    })
    it ("Should correctly divide negative number and zero",() => {
        expect (thisCalculator.getDivisionResult(0,-150000000000.23)).to.be.equal(0), DIVISION_ERROR;
    })
})
