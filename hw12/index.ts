import { Building, University } from "./classes/index";
import { assignStudentToUniversity } from "./helpers/helpers";
import {
    studentJohn,
    studentSarah,
    studentFrank
} from "./constants/constants";
const myBuilding = new Building(1971, "Vitebsk");
myBuilding.getBuildingInfo();
const myUniversity = new University(1971, "Vitebsk", "VSMU");
myUniversity.getStudentsList();
myUniversity.getYoungestStudentAge();
try {
    assignStudentToUniversity(
        myUniversity,
        studentFrank,
        studentJohn,
        studentSarah);
}
catch (error: any) { console.log(error.message)};
myUniversity.getStudentsList();
myUniversity.getYoungestStudentAge()