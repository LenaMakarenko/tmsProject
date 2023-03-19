/// Task 1
class Animal {
    public readonly name: string;
    private age: number;
    static animalType: string = "cat";

    constructor(animalName: string, animalAge: number) {
        this.name = animalName;
        this.age = animalAge;
    }

public getGreeting(): string {
      return `This is a ${Animal.animalType}. It's name is ${this.name}`
}
}
const animalOne = new Animal("Vasiliy", 3)
console.log (animalOne.getGreeting())
/// Task 2
class Pet extends Animal {
   protected readonly address: string;
   constructor (animalName: string, animalAge: number, petAddress: string) {
    super (animalName, animalAge);
    this.address = petAddress
   }

   public whereLives(): string {
return `My ${Animal.animalType} lives in ${this.address}`
   }
}
const petOne = new Pet("Barsik", 6, "Mogilev. Leninskaya street, 12" )
console.log (petOne.whereLives())