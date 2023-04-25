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
try {
    assignStudentToUniversity(
        myUniversity,
        studentFrank,
        studentJohn,
        studentSarah);
    }
catch (Error: any) 
{ console.log(Error.message) }
    console.log(myUniversity.getStudentsList())
    console.log(myUniversity.getYoungestStudentAge())
///myUniversity.studentsAge = myUniversity.studentsAge.filter((item, index) => myUniversity.studentsAge.indexOf(item) === index)
//console.log(myUniversity.studentsAge)