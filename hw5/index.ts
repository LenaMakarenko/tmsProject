///// Task 1
 {function getSum(x:number): void {
    let result: number = x * (x + 1)/2;
    console.log (result);
    }
    getSum(100);}
    ///// Task 2
    let interestRatePerYear: number = 0.17;
    let numberOfYears: number = 5;
    function overpaymentSum (x: number): void {
    let result = x * interestRatePerYear * numberOfYears 
    console.log (result)
    }
    overpaymentSum (100);
    //// Task 3
    function trimString (textString: string, valueFrom: number, valueBefore: number) {
        console.log (textString.slice (valueFrom, valueBefore))
    }
    trimString ("TeachMeSkills", 3, 7)
    //// Task 4
    function getSumNumbers (x:number) {
        let sum = 0;
        let variet: string = String(x);
        for (let i = 0; i < variet.length; i ++) {
            sum += Number (variet [i]);
        } console.log (sum)
    }
    getSumNumbers (2021)
    /// Task 5
    function getSum(a: number, b: number) {
        console.log ((a  + b) * (Math.abs(a - b) + 1) / 2)
}
    getSum (1, -2);
    //// Task 6
    const foo = () => console.log ("foo");
    const boo = () => console.log ("boo");
    function fooboo (z:boolean, foo: any, boo: any): any {
    z ? foo() : boo()}
    fooboo(true, foo, boo)
