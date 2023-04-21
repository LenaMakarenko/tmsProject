import { University } from "../classes/index"
import {Student} from "../types/types"
export function assignStudentToUniversity(university: University, ...students: Student[]) { 
    const newArr = students.filter(val => val.age < 16)
    newArr.forEach(result => {console.log (`We believe that ${result.name} ${result.surname} should finish school at first, as he/she is only ${result.age} years old`)})
    students.forEach((value) => {university.students.push(value.name + " " + value.surname)})
    students.forEach((value) =>{university.studentsAge.push(value.age)})    
    }