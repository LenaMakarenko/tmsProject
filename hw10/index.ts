class Car {
    constructor (public carName: string, public engineType: string ) {}

}

class SportCar extends Car {
    maxSpeed: number;
    carCost: number;
    constructor(public carName: string, public engineType: string, maxSpeed: number, carCost: number ) {
        super(carName, engineType)
        this.maxSpeed = maxSpeed
        this.carCost = carCost
    }
        getMaxSpeedAndCostOfTheCar() {
            return `This is ${this.carName}. It has ${this.engineType} engine and max speed equal to ${this.maxSpeed}. Approximetly cost of the car is ${this.carCost}`
        }
    }