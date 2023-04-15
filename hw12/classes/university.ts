const { Building } = require('./building')
export class University extends Building {

    public readonly name: string;
    public students: string[] = [];
    public studentsAge: number[] = [];
    constructor(name: string) {
        super()
        this.name = name
    }
    public getStudentsList() {
        if (this.students.length === 0) return `The studying year hasn't begun yet in ${this.name} university.`
        else return this.students.toString()
    }

    public getYoungestStudentAge() {
        const minStudentsAge = Math.min(...this.studentsAge)
        if (this.studentsAge.length === 0) return "We are still waiting for new students."
        else return `The youngest student we have in ${this.name} university is ${minStudentsAge} years old.`
    }
}


