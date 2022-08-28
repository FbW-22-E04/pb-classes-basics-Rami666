const now = new Date();
const test = new Date();

console.log(now);

//1 now is the current date variable

console.log(typeof now);

//2 now is a date object



// In the code above, what is the Date?
//3 A date object

console.log(typeof date);
//What is the type of Date?
//4 A date object,, undefined

//What do you get when you do console.log(now)?
//5 the current date 

//console.log(date);
//6 ReferenceError: date is not defined


console.log(new Date())
//7 the current date

//Is now truthy?
//8 true


console.log(now === test)
//9 false because they are two different objects

console.log(now === Date)
//10 false 

console.log(now === new Date())
//11 false

console.log(new Date() === new Date())





