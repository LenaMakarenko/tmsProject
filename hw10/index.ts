class Car {
    constructor (
        public carName: string, 
        protected engineType: string ) {}
}
class SportCar extends Car {
    constructor(
        public carName: string,
        protected engineType: string, 
        private maxSpeed: number,
        public carCost: number ) {
        super(carName, engineType)
        this.maxSpeed = maxSpeed
        this.carCost = carCost
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
        public carCost: number ) {
        super(carName, engineType)
        this.maxSpeed = maxSpeed
        this.carCost = carCost
    }
    public getMaxSpeedAndCostOfTheCar() {
        return `This is ${this.carName}. It has ${this.engineType} engine and max speed equal to ${this.maxSpeed} km/h. Approximetly cost of the car is ${this.carCost}$`
    }

}
const luxaryCar1  = new LuxaryCar ("Audi", "hgjhg", 120, 140000)
console.log (luxaryCar1.getMaxSpeedAndCostOfTheCar())
const sportCar1 = new SportCar ("Ford", "kjhg", 260, 2000000)
console.log (sportCar1.getMaxSpeedAndCostOfTheCar())
function getCarDesign(this: Car, numberOfDoors: number, steeringWheelSide: string) { 
return `${this.carName} has ${numberOfDoors} doors and this is ${steeringWheelSide}-hand drive car.`}
console.log (getCarDesign.call(sportCar1, 2, "left"))
console.log (getCarDesign.call(luxaryCar1, 4, "right"))