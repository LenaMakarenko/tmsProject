//// Task 1
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
fibonacci.forEach((item: number) => {
    console.log (item)
})
fibonacci.forEach(fibonacciFunction)
function fibonacciFunction (item: number): void {
    console.log (item)
}
//// Task 2
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
users.map((item, index) => {
    index++
    console.log ("member" + " " + `${index}` + ':' + ' ' + `${item}`)
})
users.forEach(mapArrOfUsers);
function mapArrOfUsers(item: string, index: number): any {
    index++
    console.log ("member" + " " + `${index}` + ':' + ' ' + `${item}`)
};
/// Task 3
const numbersOfTask3Hw8: number [] = [7, -4, 32, -90, 54, 32, -21]
const newArrNumbersAboveZero  = numbersOfTask3Hw8.filter ((item:number) => {
    if (item > 0) {
        return item
    }
})
console.log (newArrNumbersAboveZero)
//// Task 4
const sumOfFibonacci = fibonacci.reduce ((sum: number, item: number) => {
    return sum + item
}, 0);
console.log (sumOfFibonacci)
//// Task 5
const numbersOfTask5Hw8 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
const searchOfFirstEvenNumber = numbersOfTask5Hw8.find((item: number) => {
if (item % 2 === 0) return item
})
console.log (searchOfFirstEvenNumber)
/// Task 6
const isMultiple3And5 = [9, 67, 15, 30, 2].some((item: number) => {
if (item % 3 === 0 && item % 5 === 0) return item
}) 
console.log (isMultiple3And5)
//// Task 7
const resultOfTask7: boolean = [2, 8].every((item: number) => {
item**2
let sum = 0
let y = String(item)
for ( let i = 0; i < y.length; i++){
    sum += Number(y[i]);
}
if (sum % 2 === 0) return sum
})
console.log (resultOfTask7)
//// Task 8
const recipeMap = new Map<string, number>([
    [`cucumber`, 300],
    [`tomato`, 200],
    [`salt`, 10],
    [`sour cream`, 110]
])
recipeMap.forEach((item: number) => {
    if (item > 100) {
        console.log (item)
    }
})
//// Task 9
const numbersOfTask9 = [1, 6, 3, 2, 7, 325, 234, 54, 586, 23, 24, 64, 56,
    3, 5, 7, 8, 1, 6, 8, 9, 4, 5, 61, 2, 4, 5, 6, 3, 5] 
const setOfNumbers = new Set(numbersOfTask9);
console.log(setOfNumbers)