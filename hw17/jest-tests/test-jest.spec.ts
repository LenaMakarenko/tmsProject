import { Calculator } from "../src/classes";
import {expect} from "@jest/globals";
import { DIVISION_WARNING } from "../src/constants";
const thisCalculator = new Calculator();

describe("Testing the number addition method", () => {
    test ("Should correctly add two positive numbers",() => {
        expect(thisCalculator.getAdditionResult(100000000,20000)).toEqual(100020000);
    })

    test ("Should correctly add two negative numbers",() => {
        expect(thisCalculator.getAdditionResult(-26,-158)).toEqual(-184);
    })

    test ("Should correctly add negative and positive numbers",() => {
        expect(thisCalculator.getAdditionResult(-26,45)).toEqual(19);
    })
})

describe("Testing the number subtraction method", () => { 
    test ("Should correctly subtract positive number and zero",() => {
        expect(thisCalculator.getSubtractionResult(256,0)).toEqual(256);
    })

    test ("Should correctly subtract negative and positive numbers",() => {
        expect(thisCalculator.getSubtractionResult(-25,19)).toEqual(-44);
    })
})

describe("Testing the number multiplication method", () => { 
    test ("Should correctly multiply positive number and zero",() => {
        expect(thisCalculator.getMultiplicationResult(256,0)).toEqual(0);
    })

    test ("Should correctly multiply negative and positive numbers",() => {
        expect(thisCalculator.getMultiplicationResult(-25,236)).toEqual(-5900);
    })
})

describe("Testing the number division method", () => { 
    test ("Should correctly divide positive number and zero",() => {
        expect(thisCalculator.getDivisionResult(256,0)).toEqual(DIVISION_WARNING);
    })

    test ("Should correctly divide negative and positive numbers",() => {
        expect(thisCalculator.getDivisionResult(-24,4)).toEqual(-6);
    })

    test ("Should correctly divide zero and negative numbers",() => {
        expect(thisCalculator.getDivisionResult(0,-150000000000.23)).toEqual(-0)
    })
})
