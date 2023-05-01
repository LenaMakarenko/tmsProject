export class Calculator {
    constructor() { }
    public getAdditionOperation(arg1: number, arg2: number) { return arg1 + arg2 }
    public getSubtractionOperation(numb1: number, numb2: number) { return numb1 - numb2 }
    public getMultiplicationOperation(param1: number, param2: number) { return param1 * param2 }
    public getDivisionOperation(number1: number, number2: number) { if (number2===0)  return "Can't divide by zero!"; return number1 / number2
}}

const jhg = new Calculator
jhg.getDivisionOperation(5,0)