const user = {
  name: "Alex",
  address: "15th Park Avenue",
  age: 43,
};

const { name, age } = user;

console.log(name, age); // Output, Alex 43
// So, how do we extract values from more than one object property? Simple
//  – we keep adding the object keys inside the {} with commas separating them.
//   In the example below,
//  we destructure both the name and age properties from the user object.

const userr = {
  namee: "Alex",
  address: "15th Park Avenue",
  agee: 43,
};
const { namee, agee, salary = 123455 } = userr;

console.log(namee, agee, salary); // Output, Alex 43 123455
// We can add a new variable while destructuring and add a default value to it.
//  In the example below, the salary variable is non-existent in the user object.
//  But we can add it in the destructuring expression and add a default value to it.

//-----NESTED-object
const PERSON = {
  name: "Alex",
  address: "15th Park Avenue",
  age: 43,
  department: {
    name: "Sales",
    Shift: "Morning",
    address: {
      city: "Bangalore",
      street: "7th Residency Rd",
      zip: 560001,
    },
  },
};

const {
  department: { address },
} = PERSON;

const {
  department: {
    address: { city },
  },
} = PERSON;
