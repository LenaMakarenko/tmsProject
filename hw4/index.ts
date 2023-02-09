/// task 1
let usersName: string = "John";
let usersSurname: string = "Terry";
let usersgreetings = 'Hello, ' + usersName.toUpperCase() + ' ' + usersSurname.toLowerCase() + ' ;';
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