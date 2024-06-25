//Refactor the following function into a one-liner:
const printName = (name) => "Hi " + name;
console.log(printName("sravani"));

// Refactor printBill function using template literals
const printBill = (name, bill) => `Hi ${name}, please pay: ${bill}`;
console.log(printBill("Bob", "$100")); 

// Modified code using object destructuring
const person = {
    name: "Noam Chomsky",
    age: 92
};

// Destructuring assignment
let { name, age } = person;

console.log(name); 
console.log(age); 