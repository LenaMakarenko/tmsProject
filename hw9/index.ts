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
console.log (animalOne)
console.log (animalOne.getGreeting())
/// Task 2
class Pet extends Animal {
   private readonly address: {city: string, street: string, "house number": number} = 
   {city: "Mogilev", street: "Leninskaya", "house number": 12};
   constructor (animalName: string, animalAge: number) {
    super (animalName, animalAge);
   }

   public whereLives(): string {
return `My ${Animal.animalType} lives in ${this.address.city} city, ${this.address.street} street, ${this.address["house number"]}`
   }
}
const petOne = new Pet("Barsik", 6)
console.log (petOne)
console.log (petOne.whereLives())