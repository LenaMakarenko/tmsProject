import { University } from "../classes/index"
import {Student} from "../types/types"
export function assignStudentToUniversity(university: University, ...students: Student[]) { 
    students.forEach((value) => {university.students.push(value.name + " " + value.surname)})
    students.forEach((value) =>{university.studentsAge.push(value.age)})    
    }