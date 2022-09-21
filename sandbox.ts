// const character = 'timothy';

// console.log(character);

// const inputs = document.querySelectorAll('input');
// console.log(inputs);

// inputs.forEach(input => {
//   console.log(input);
// });

let cat = 'Dena';
let age = 5;

// cat = 15 // we get a squiguly line - only accepts string
// age = 'five' // only accepts number

/* const circ = (diameter: number) => {
    return diameter * Math.PI
}

console.log(circ(8)); */


// ARRAYS

let names = ['Dena', 'Effi', 'Masa'];
names.push('Cirmi');
console.log(names);

// names.push(5); // won't allow me to push other than string
// names[0] = true // won't allow me to overwrite to a boolean

let numbers = [20, 89, 7];
// numbers.push('Kate'); // type is number, won't allow me to push a string to it

let mixed = [4, 'Effi', true, 'Tiszaszentimre', 15];
mixed.push(87);
mixed.push('Szentimre');
mixed[0] = 'Kertalja'; // won't complain, since it is a mixed array


// OBJECTS

let ninja = {
    name: "mario",
    belt: "black",
    age: 30
}

ninja.age = 50
ninja.name = "Ryan"
// ninja.belt = 1 // won't work

// ninja = [] // won't work because it is an object type
// ninja = 'Pinja' // same - can't transform it to a string

// BUT I can create a new object, but if I leave one key- value pairs, it won't pass. It has to match in all fields
ninja = {
    name: 'Yoshi',
    belt: 'yellow',
    age: 60
}