export class Building {
    public readonly foundationYear: number;
    public readonly city: string;

    constructor (foundationYear: number, city: string) {
    this.foundationYear = foundationYear;
    this.city = city}

    public getBuildingInfo() {
        return `This building was found in ${this.foundationYear} in ${this.city}.`
    }
}