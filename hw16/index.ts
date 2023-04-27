import { myCalculatorChecker } from "./custom-checker";
//// positive cheks
myCalculatorChecker(2,100,'+',102)
myCalculatorChecker(2,-10,'+',-8)
myCalculatorChecker(10.5,5.3,'-',5.2)
myCalculatorChecker(-16,-3,'*',48)
myCalculatorChecker(-5,3,'*',-15)
myCalculatorChecker(56,0,'/',"can't divide by zero")
myCalculatorChecker(-10,2,'/',-5)
//// negative cheks
myCalculatorChecker(23,3,'+',30)
myCalculatorChecker(-12,-24.9,'-',36.6)
myCalculatorChecker(5,0,'*',2)
myCalculatorChecker(23,0,'/',0)
myCalculatorChecker(2.6,1.4,'/',23)
myCalculatorChecker(100000000000,2,'-',1000000000000000)
myCalculatorChecker(-3,-3,'-',3)