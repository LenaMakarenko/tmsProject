import { DIVISION_WARNING } from "./constants";

export class Calculator {
    constructor() { }
    public getAdditionResult(arg1: number, arg2: number) { return arg1 + arg2 }
    public getSubtractionResult(numb1: number, numb2: number) { return numb1 - numb2 }
    public getMultiplicationResult(param1: number, param2: number) { return param1 * param2 }
    public getDivisionResult(number1: number, number2: number) { if (number2===0)  return DIVISION_WARNING; return number1 / number2
}}