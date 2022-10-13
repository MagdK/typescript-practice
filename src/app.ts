import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';


/* let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('mario', 'plumbing work', 300);
docTwo = new Payment('luigi', 'running', 200);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs); */


/* const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

console.log(invOne, invTwo);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
    // inv.client = 'something else'; // I get an error, because it is read only
    console.log(inv.client, inv.amount, inv.format()); 
}); */


// To combat this we can use type casting!!!!
const form = document.querySelector('.new-item-form') as HTMLFormElement; // const form: HTMLFormElement

// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// List template instance
const ul = document.querySelector('ul')!;

const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault(); // this will prevent the page refreshing when we submit the form

    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber];

    let doc: HasFormatter;
    if(type.value === 'invoice') {
        doc = new Invoice(...values)
    } else {
        doc = new Payment(...values)
    }
    console.log(doc);

    list.render(doc, type.value, 'end');
});


// GENERICS

const addUID = <T extends {name: string}>(obj: T) => { // T captures whatever item we pass in - we are capturing what type it is, and if it is an object, what properties it has
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
};

let docOne = addUID({name: 'yosi', age: 50}); // invoced it and passed in two key value pairs in the object

console.log(docOne.age); // now we can access name, age, uid because of the <T>


// ENUMS

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }



// WITH INTERFACES
// an interface defines how an object should look

interface Resource<T> {
    uid: number;
    resourceName: ResourceType;
    data: T;
}

const docThree: Resource<string> = {
    uid: 21,
    resourceName: ResourceType.AUTHOR,
    data: 'shaun'
}

const docFour: Resource<string[]> = {
	uid: 32,
	resourceName: ResourceType.PERSON,
	data: ['fish', 'chicken', 'milk']
}

console.log(docThree, docFour);

// ARRAY - we can change mostly everything
let arr = ['str', 45, true];
arr[0] = false;
arr[1] = 'yoshi';

arr = [true, 30, 'effi'];


// TUPLE

let tup: [string, number, boolean] = ['ryu', 23, true];

tup[0] = 'ken';
tup[1] = 45;
tup[2] = false;

let student: [string, number];
student = ['John Lee', 563121];