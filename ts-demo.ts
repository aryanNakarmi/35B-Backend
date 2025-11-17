let message: string = "hello";
console.log(message);

//message 0 //Error


//Primitive types

let booleanVar: boolean = true;
let numberVar: number = 23;
let symbolVar: symbol = Symbol("Unique");
let nullVar : null = null;
let undefinedVar: undefined = undefined;

let anyVar: any = "Could be anything";
anyVar = anyVar + 100; //no error

let unknownVar: unknown = "Could be anything too";
//unknowVar = unknownVar +100; //Error
//unknown is type assertion;

let scores: number[] = [90, 80 ,70] ;
console.log(scores);

//tuples
let tuplesVar: [string, number] = ["Alice",30];
console.log(tuplesVar);
//tupleVar = [30, "alice"]


//Union

let id: string | number; 
id = "Hellow";
console.log(id);
id = 123;
console.log(id);

let id1: string | number | boolean; 
id1 = true 
console.log(id);

// function

function add(num1: number, num2:number): string{
    let sum: number = num1 + num2;
    return `Sum is ${sum}`;
}
let result: string = add(10,20);
console.log(result);

const greet = (name: string = "Guest"): void =>{
    console.log(`Hello, ${name}`);    
}
greet(); //name is optional if default value\


//Object definition
//1. Object Literal

let person: {name: string; age: number} = {
    name: "bob",
    age: 26,
};
console.log(person, person.name);



//2. Interface
interface Product{
    id:number;
    name: string;
    price: number;
    description?:  string; //optional
}
const laptop: Product = {
    id:1,
    name: "Laptop",
    price: 1500
}
console.log(laptop);


//3. Type alias

type Student = {
    id: number;
    name: string;
    grade: string;
    product?: Product; 
}
let student1: Student = {
    id: 101,
    name: "Charli",
    grade: "A",
    product: laptop
};
console.log(student1);


// Generics
function identity<T>(arg: T) : T{
    return arg;
}

// Data type injected at call time
let output1: string = identity<string>("myString");
console.log(output1);
let output2: number = identity<number>(100);
console.log(output2);

//enum
// named constant

enum Role{
    Admin,
    User,
    Guest
}
let userRole: Role= Role.Admin;
console.log(userRole); //0
console.log(userRole == Role.Admin); //constant check

let userRoleName: string = "admin";
console.log(userRoleName == "Admin");   //case sensitive check



//Generic Usecase

interface User{
    id: number;
    name: string;
    role: Role;
}
let optUser: Partial<User> ={
    name: "Dave"
};
//every attribute is optional

console.log(optUser);
let readonlyUser: Readonly<User> = {
    id: 1,
    name: "eve",
    role: Role.User
};
//readonlyUser.id = 2 //error

console.log(readonlyUser);
