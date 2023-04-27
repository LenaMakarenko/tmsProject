export function myCalculator (firstArgument: number, secondArgument: number, operation: '+'| '-'| '*'|'/'): number {
    switch (operation) {
        case '+': 
        return firstArgument + secondArgument;
        case '-': 
        return firstArgument - secondArgument;
        case '*': 
        return firstArgument * secondArgument; 
        case '/': 
        return firstArgument / secondArgument; 
    }
    }
    