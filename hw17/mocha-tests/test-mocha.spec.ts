import { Calculator } from "../src/classes";
import {equal} from "assert";
import { ADD_ERROR, DIVISION_ERROR, MULTIPLICATE_ERROR, SUBTRACTION_ERROR } from "../src/constants";
import {expect} from "chai";

const thisCalculator = new Calculator();

describe("Testing the number addition method", () => {
    it ("Should correctly add two positive numbers",() => {
        equal(thisCalculator.getAdditionOperation(100000000,20000), 100020000, ADD_ERROR);
    })

    it ("Should correctly add two negative numbers",() => {
        equal(thisCalculator.getAdditionOperation(-26,-158), -184, ADD_ERROR);
    })
    it ("Should correctly add negative and positive numbers",() => {
        expect (thisCalculator.getAdditionOperation(-26,45)).to.be.equal(19), ADD_ERROR;
    })
})

describe("Testing the number subtraction method", () => { 
    it ("Should correctly subtract two positive numbers",() => {
        equal(thisCalculator.getSubtractionOperation(256,0), 256, SUBTRACTION_ERROR);
    })
    it ("Should correctly subtract positive and negatve numbers",() => {
        equal(thisCalculator.getSubtractionOperation(-25,19), -44, SUBTRACTION_ERROR);
    })
})

describe("Testing the number multiplication method", () => { 
    it ("Should correctly multiply two negative numbers",() => {
        equal(thisCalculator.getMultiplicationOperation(256,0), 0, MULTIPLICATE_ERROR);
    })
    it ("Should correctly multiply positive and negatve numbers",() => {
        equal(thisCalculator.getMultiplicationOperation(-25,236), -5900, MULTIPLICATE_ERROR);
    })
})

describe("Testing the number division method", () => { 
    it ("Should correctly divide two positive numbers",() => {
        equal(thisCalculator.getDivisionOperation(256,0), "Can't divide by zero!", DIVISION_ERROR);
    })
    it ("Should correctly divide positive and negatve numbers",() => {
        equal(thisCalculator.getDivisionOperation(-24,4), -6, DIVISION_ERROR);
    })
    it ("Should correctly divide negative and positive numbers",() => {
        expect (thisCalculator.getDivisionOperation(-0,150000000000.23)).to.be.equal(0), ADD_ERROR;
    })
})
