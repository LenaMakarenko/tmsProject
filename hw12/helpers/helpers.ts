import { University } from "../classes/index"
import { Student } from "../types/types"
export function assignStudentToUniversity(
    university: University,
    ...students: Student[]) {
    students.forEach((student) => {
        if (student.age >= 16) {
            university.students.push(student.name + " " + student.surname);
            if (!university.studentsAge.includes(student.age)) 
                university.studentsAge.push(student.age)}
            else {
                throw new Error(`Error:We believe that ${student.name} ${student.surname} should finish school at first, as he/she is only ${student.age} years old`)
            }
        })
    }

