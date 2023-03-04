///// Task 1
type NewYorker = {
    name?: string | undefined;
    age?: number | undefined
}
const newYorker1: NewYorker = { name: "Carrie Bradshow", 
  age : 35,
}
console.log (newYorker1);
delete newYorker1.age;
delete newYorker1.name;
console.log (newYorker1);
/// Task 2
type doctor = {
speciality : string;
"is highest category" : boolean
}
const doctor1: doctor = {
  speciality : "ophtalmologist",
  "is highest category" : true,
}
function searchForAKeySpeciality (object: any ): any {
  if ("speciality" in object) console.log ('true')
  else console.log (false)
}
searchForAKeySpeciality (doctor1)
searchForAKeySpeciality (newYorker1)
//// Task 3
type StudentType = {
    name: string;
    age: number;
    isHappy: boolean;
    [key: string]: string | number | boolean
}
const student: StudentType = {
  name: 'John',
  age: 19,
  isHappy: true
}
for (let key in student) {
  console.log (key)
}
for (let key in student) {
  console.log (student[key])
}