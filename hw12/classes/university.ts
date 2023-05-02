import { Building } from "./building";
export class University extends Building {
    public students: string[] = [];
    public studentsAge: number[] = [];
    constructor(public readonly foundationYear: number, public readonly city: string, public readonly name: string) {
        super(foundationYear, city)
        this.name = name
    }
    public getStudentsList() {
        if (this.students.length === 0) console.log (`The studying year hasn't begun yet in ${this.name} university.`)
        else console.log(this.students.toString())
    }

    public getYoungestStudentAge() {
        const minStudentsAge = Math.min(...this.studentsAge)
        if (this.studentsAge.length === 0) console.log ("We are still waiting for new students.")
        else console.log (`The youngest student we have in ${this.name} university is ${minStudentsAge} years old.`)
    }
}
