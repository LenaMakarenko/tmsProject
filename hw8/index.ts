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
