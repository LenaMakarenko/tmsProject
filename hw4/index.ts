/// task 1
let usersName: string = "John";
let usersSurname: string = "Terry";
let usersgreetings = 'Hello, ' + usersName.toUpperCase() + ' ' + usersSurname.toLowerCase() + ';';
console.log (usersgreetings.repeat(5));
/// task 2
let someString: string = "I learn TypeScript!";
let userInputData: string = "TypeScript";
switch (userInputData) {
    case "I":
         console.log (someString.indexOf ("I"));
        break;
    case "learn":
         console.log (someString.indexOf ("learn"));
         break;
    case "TypeScript":
        console.log (someString.indexOf ("TypeScript"))
        break;
    default:
        console.log ('There is no such substring in the original string!');
}
// Task 3
let secondSomeString: string = "Inspiration";
let lengthSecondSomeString:number = secondSomeString.length
let usersvariableOfSymbolPosition: number = 12;
if (usersvariableOfSymbolPosition <= lengthSecondSomeString) {
    console.log (secondSomeString.charAt(usersvariableOfSymbolPosition))
} else {
    console.log ("You are beyond the string length")
};
//// Task 4
let thirdSomeString: string = "Tasty and point."
let searchPoint: boolean = thirdSomeString.endsWith(".");
if (searchPoint === true) {
    console.log ("We have a finished sentence")
} else {
    console.log ("There is a dot missed.")
};
///// Task 5
const stringOfTaskhw4: string = "I learn TypeScript!";
console.log (stringOfTaskhw4.substring(2,7));
console.log (stringOfTaskhw4.slice (-11,18));
//// Task 6
console.log (stringOfTaskhw4.split(" "));
/// Task 7
const secondStringOfTaskhw4: string = " I learn TypeScript!";
console.log (secondStringOfTaskhw4.trim( ));
// Task 8
let someNumber: number = 8.829734872948;
console.log (someNumber.toFixed(3));
//// Task 9
let newSomeNumber: number = 15.156;
if (Number.isInteger(newSomeNumber)) {
    console.log (newSomeNumber)
} 
else {
    console.log (newSomeNumber.toFixed(0))
} 
/// Task 10
let secondNewSomeNumber: number = 123.65465
console.log (Math.floor(secondNewSomeNumber));
console.log (Math.ceil(secondNewSomeNumber));
console.log (Math.round(secondNewSomeNumber));
// Task 11
let someAnyString: number = 2;
let variableOFDegree: number = 3;
console.log (Math.pow (someAnyString,variableOFDegree));
// Task 12
let writeAnyRange_min: number = Math.ceil(1.5);
let writeAnyRange_max: number = Math.floor(32.2);
console.log (Math.floor(Math.random() * (writeAnyRange_max - writeAnyRange_min )) + writeAnyRange_min);
// Task 13
console.log (Math.random() * (writeAnyRange_max - writeAnyRange_min) + writeAnyRange_min);
/// Task 14
const todayDate: Date = new Date();
let month = todayDate.getMonth() + 1;
console.log ("Current date: " + "<" + month + ">" + "/" + "<" + todayDate.getFullYear() + ">" + "/" +"<" + todayDate.getDate() + ">." + "Current time:" + todayDate.toLocaleTimeString());