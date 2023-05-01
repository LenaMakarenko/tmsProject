import { Calculator } from "../src/classes";
import {expect} from "@jest/globals";
const thisCalculator = new Calculator();

describe("Testing the number addition method", () => {
    test ("Should correctly add two positive numbers",() => {
        expect(thisCalculator.getAdditionOperation(100000000,20000)).toEqual(100020000);
    })

    test ("Should correctly add two negative numbers",() => {
        expect(thisCalculator.getAdditionOperation(-26,-158)).toEqual(-184);
    })

    test ("Should correctly add negative and positive numbers",() => {
        expect(thisCalculator.getAdditionOperation(-26,45)).toEqual(19);
    })
})

describe("Testing the number subtraction method", () => { 
    test ("Should correctly subtract two positive numbers",() => {
        expect(thisCalculator.getSubtractionOperation(256,0)).toEqual(256);
    })

    test ("Should correctly subtract positive and negatve numbers",() => {
        expect(thisCalculator.getSubtractionOperation(-25,19)).toEqual(-44);
    })
})

describe("Testing the number multiplication method", () => { 
    test ("Should correctly multiply two negative numbers",() => {
        expect(thisCalculator.getMultiplicationOperation(256,0)).toEqual(0);
    })

    test ("Should correctly multiply positive and negatve numbers",() => {
        expect(thisCalculator.getMultiplicationOperation(-25,236)).toEqual(-5900);
    })
})

describe("Testing the number division method", () => { 
    test ("Should correctly divide two positive numbers",() => {
        expect(thisCalculator.getDivisionOperation(256,0)).toEqual("Can't divide by zero!");
    })

    test ("Should correctly divide positive and negatve numbers",() => {
        expect(thisCalculator.getDivisionOperation(-24,4)).toEqual(-6);
    })

    test ("Should correctly divide negative and positive numbers",() => {
        expect(thisCalculator.getDivisionOperation(0,-150000000000.23)).toEqual(-0)
    })
})
