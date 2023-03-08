/// Task 1
const colorsHw7: string [] = ["red", "green", "blue"];
console.log (colorsHw7.length);
//// Task 2
const animals = ["monkey", "dog", "cat"];
let lastNumberAr: number = animals.length - 1;
console.log (animals[lastNumberAr])
//// Task 3
const numbers = [5, 43, 63, 23, 90];
numbers.length = 0;
console.log (numbers);
const numbers2 = [5, 43, 63, 23, 90];
numbers2.splice(0);
console.log (numbers2);
//// Task 4
const students = ["Polina", "Dasha", "Masha"];
students.pop();
students.push("Borya");
students.shift();
students.unshift('Andrey');
console.log (students);
//// Task 5
const cats = ["Gachito", "Tom", "Batman"];
for (let i = 0; i < cats.length; i++) {
    console.log (cats[i])
}
for (const cat of cats) {
    console.log (cat)
}
//// Task 6
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const allNumbers = [...evenNumbers,...oddNumbers];
console.log (allNumbers);
console.log (allNumbers.indexOf(8));
//// Task 7
const binary = [0, 0, 0, 0];
console.log (binary.join('1'));