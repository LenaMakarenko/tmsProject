export class Building {
    constructor(public readonly foundationYear: number, public readonly city: string) {
    }

    public getBuildingInfo() {
        console.log(`This building was found in ${this.foundationYear} in ${this.city}.`)
    }
}