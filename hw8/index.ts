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