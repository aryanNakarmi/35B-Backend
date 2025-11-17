var message = "hello";
console.log(message);
//message 0 //Error

//Primitive types
var booleanVar = true;
var numberVar = 23;
var symbolVar = Symbol("Unique");
var nullVar = null;
var undefinedVar = undefined;
var anyVar = "Could be anything";
anyVar = anyVar + 100; //no error
var unknownVar = "Could be anything too";
//unknowVar = unknownVar +100; //Error
//unknown is type assertion;
var scores = [90, 80, 70];
console.log(scores);
//tuples
var tuplesVar = ["Alice", 30];
console.log(tuplesVar);
//tupleVar = [30, "alice"]
//Union
var id;
id = "Hellow";
console.log(id);
id = 123;
console.log(id);
var id1;
id1 = true;
console.log(id);
// function
function add(num1, num2) {
    var sum = num1 + num2;
    return "Sum is ".concat(sum);
}
var result = add(10, 20);
console.log(result);
var greet = function (name) {
    if (name === void 0) { name = "Guest"; }
    console.log("Hello, ".concat(name));
};
greet(); //name is optional if default value\
//Object definition
//1. Object Literal
var person = {
    name: "bob",
    age: 26,
};
console.log(person, person.name);
var laptop = {
    id: 1,
    name: "Laptop",
    price: 1500
};
console.log(laptop);
var student1 = {
    id: 101,
    name: "Charli",
    grade: "A",
    product: laptop
};
console.log(student1);
