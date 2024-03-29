import { Operations } from "./types/types";

export function myCalculator(firstArgument: number, secondArgument: number, operation: Operations ): number | string {
    switch (operation) {
        case '+':
            return firstArgument + secondArgument;
        case '-':
            return firstArgument - secondArgument;
        case '*':
            return firstArgument * secondArgument;
        case '/':
            if (!secondArgument) return "can't divide by zero"
            return firstArgument / secondArgument;
        default: 
            throw new Error ('Incorrect operation!')   
    }
}