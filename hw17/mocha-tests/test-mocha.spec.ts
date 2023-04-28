import { Calculator } from "../src/classes";
import assert from "assert";

const thisCalculator = new Calculator();

describe("Testing the number addition method", () => {
    it ("Should correctly add two positive numbers",() => {
        assert.equal(thisCalculator.getAdditionOperation(100000000,20000), 100020000);
        
    }
)})