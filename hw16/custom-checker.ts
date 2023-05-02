import { myCalculator } from "./calculator";
import { Operations } from "./types/types";
export function myCalculatorChecker(firstArgument: number, secondArgument: number, operation: Operations, resultChecker: number | string) {
    if (myCalculator(firstArgument, secondArgument, operation) === resultChecker) {
        console.log('Test passed!');
    }
    else {
        console.log('Test failed!')
    }
}