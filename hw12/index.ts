import * as obj from "./classes/index"
import { assignStudentToUniversity } from "./helpers/helpers"
import {
    studentJohn,
    studentSarah,
    studentFrank
} from "./constants/constants"
const myBuilding = new obj.Building(1971, "Vitebsk") 
console.log(myBuilding.getBuildingInfo())
const myUniversity = new obj.University("VSMU")
console.log(myUniversity.getStudentsList())
console.log(myUniversity.getYoungestStudentAge())
assignStudentToUniversity(myUniversity, studentFrank, studentJohn, studentSarah)
console.log(myUniversity.getStudentsList())
console.log(myUniversity.getYoungestStudentAge())