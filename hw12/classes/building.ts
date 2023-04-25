export class Building {
    constructor (public foundationYear: number, public readonly city: string) {
    this.foundationYear = foundationYear;
    this.city = city}

    public getBuildingInfo() {
        return `This building was found in ${this.foundationYear} in ${this.city}.`
    }
}
