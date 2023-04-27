import { myCalculator } from "./calculator";
export function myCalculatorChecker(firstArgument: number, secondArgument: number, operation: '+' | '-' | '*' | '/', resultChecker: number | string) {
    if (myCalculator(firstArgument, secondArgument, operation) === resultChecker) {
        console.log('Test passed!');
    }
    else {
        console.log('Test failed!')
    }
}