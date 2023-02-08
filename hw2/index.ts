console.log ('Hello, world!');
//#### Task 1
let x: number = 20;
let y: number = 58;
let z: number = 42;
console.log (x+y+z);
//  Task 2
const numberOfSecIn1Min: number = 60;
const numberOfMinIn1Hour: number = 60;
const numberOfHourIn1Day: number = 24;
const numberOfDayIn1Year: number = 365;
let myAgeInSeconds: number = 26 * numberOfSecIn1Min * numberOfMinIn1Hour * numberOfHourIn1Day * numberOfDayIn1Year;
//// Task 3
let count = 42;
let userName = '42';
let count_1 = String (count);
let count_2 = count.toString ();
console.log (typeof count_1);
console.log (typeof count_2);
let userName_1 = +userName;
console.log (typeof userName_1);
let userName_2 = Number (userName);
console.log (typeof userName_2);
// #### Task 4
let a = 1;
let b = 2;
let c = 'white bears';
let sum = a + b + c;
console.log (String (a) + b + ' ' + c);
// ### Task 5
let nameT5_1: string = 'access';
let nameT5_2: string = 'marine';
let nameT5_3: string = 'ice';
let nameT5_4: string = 'garden';
let nameT5_5: string = 'joy';
let lengthWords: number = (nameT5_1 + nameT5_2 + nameT5_3 + nameT5_4 + nameT5_5).length;
console.log (lengthWords);
// ######## Task 6
let k = 'true';
let l = false;
let m = 17;
let n = undefined;
let o = null;
console.log (typeof k);
console.log (typeof l);
console.log (typeof m);
console.log (typeof n);
console.log (typeof o);

/// Task 7
let height = 15;
let width = 20;
if (height > width) {
    console.log (height)
} else console.log (width);
/// Task 8
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
    console.log (i);
    }
};
//// Task 9
let key: boolean = true;
let documents: boolean = true;
let pen: boolean = true;
let apple: boolean = false;
let orange: boolean = true;
let shouldGoToWork: boolean = key && documents && pen && (apple || orange);
console.log (shouldGoToWork); 
// Task 10
let variableFizzBuzz: number = 25;
if (variableFizzBuzz % 5 === 0 && variableFizzBuzz % 3 === 0) {
    console.log ('FizzBuzz') 
} else if (variableFizzBuzz % 3 === 0) {
    console.log ('Buzz')
} else if (variableFizzBuzz % 5 === 0 ) {
    console.log ('Fizz')
};
//// Task 11
let 






