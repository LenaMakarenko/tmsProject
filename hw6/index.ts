///// Task 1
type NewYorker = {
    name?: string | undefined
    age?: number | undefined
}
const newYorker1: NewYorker = { name: 'Carrie Bradshow', age: 35 }
console.log(newYorker1)
delete newYorker1.age
delete newYorker1.name
console.log(newYorker1)
/// Task 2
type doctor = {
    speciality: string
    'is highest category': boolean
}
const doctor1: doctor = {
    speciality: 'ophtalmologist',
    'is highest category': true,
}
function searchForAKeySpeciality(object: any): any {
    if ('speciality' in object) console.log('true')
    else console.log(false)
}
searchForAKeySpeciality(doctor1)
searchForAKeySpeciality(newYorker1)
//// Task 3
type StudentType = {
    name: string
    age: number
    isHappy: boolean
    [key: string]: string | number | boolean
}
const student: StudentType = {
    name: 'John',
    age: 19,
    isHappy: true,
}
for (let key in student) {
    console.log(key)
}
for (let key in student) {
    console.log(student[key])
}
/// Task 4
type ColorsType = {
    'ru pum pu ru rum': {
        red: string
        green: string
        blue: string
    }
}
const colors: ColorsType = {
    'ru pum pu ru rum': {
        red: 'reddish',
        green: 'greenish',
        blue: 'blueish',
    },
}
console.log(colors['ru pum pu ru rum'].red, colors['ru pum pu ru rum'].blue)
//// Task 5
let salaries: any = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrei: 664,
    alexandra: 199,
}
let staff = Object.keys(salaries).length;
let sumSalaries = 0
for (let key in salaries) {
    sumSalaries += salaries[key] / staff
}
console.log(sumSalaries)
////// Task 6
let building = {
    foundation: 1997,
    country: 'USA',
    city: 'New Jersey',
    generalInfo: function (): string {
        return `This building was found in ${this.foundation} year in ${this.country}, ${this.city}.`
    },
    getDescriptionTextLength: function (): any {
        let resultString: string = this.generalInfo()
        return resultString.length
    },
}
console.log(building.generalInfo())
console.log(building.getDescriptionTextLength())
