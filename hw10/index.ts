////Task 1
class Car {
    constructor(
        public carName: string,
        protected engineType: string) { }
}
class SportCar extends Car {
    constructor(
        public carName: string,
        protected engineType: string,
        private maxSpeed: number,
        public carCost: number) {
        super(carName, engineType)
    }
    public getMaxSpeedAndCostOfTheCar() {
        return `This is ${this.carName}. It has ${this.engineType} engine and max speed equal to ${this.maxSpeed} km/h. Approximetly cost of the car is ${this.carCost}$`
    }
}
class LuxaryCar extends Car {
    constructor(
        public carName: string,
        protected engineType: string,
        private maxSpeed: number,
        public carCost: number) {
        super(carName, engineType)
    }
    public getMaxSpeedAndCostOfTheCar() {
        return `This is ${this.carName}. It has ${this.engineType} engine and max speed equal to ${this.maxSpeed} km/h. Approximetly cost of the car is ${this.carCost}$`
    }

}
const luxaryCar1 = new LuxaryCar("Audi", "hgjhg", 120, 140000)
console.log(luxaryCar1.getMaxSpeedAndCostOfTheCar())
const sportCar1 = new SportCar("Ford", "kjhg", 260, 2000000)
console.log(sportCar1.getMaxSpeedAndCostOfTheCar())
//// Task 2
type CarType = {
    carName: string,
    numberOfDoors: number,
    steeringWheelSide: string
}
const firstCar: CarType = {
    carName: "Skoda",
    numberOfDoors: 4,
    steeringWheelSide: "right"
}
const secondCar: CarType = {
    carName: "Chevrolet",
    numberOfDoors: 3,
    steeringWheelSide: "left"
}
function getCarDesign(): string {
    return `${this.carName} has ${this.numberOfDoors} doors and this is ${this.steeringWheelSide}-hand drive car.`
}
console.log(getCarDesign.call(firstCar))
console.log(getCarDesign.call(secondCar))