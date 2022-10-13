import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
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
const form = document.querySelector('.new-item-form'); // const form: HTMLFormElement
// console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// List template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault(); // this will prevent the page refreshing when we submit the form
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    console.log(doc);
    list.render(doc, type.value, 'end');
});
// GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yosi', age: 50 }); // invoced it and passed in two key value pairs in the object
console.log(docOne.age); // now we can access name, age, uid because of the <T>
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docThree = {
    uid: 21,
    resourceName: ResourceType.AUTHOR,
    data: 'shaun'
};
const docFour = {
    uid: 32,
    resourceName: ResourceType.PERSON,
    data: ['fish', 'chicken', 'milk']
};
console.log(docThree, docFour);
// ARRAY - we can change mostly everything
let arr = ['str', 45, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [true, 30, 'effi'];
// TUPLE
let tup = ['ryu', 23, true];
tup[0] = 'ken';
tup[1] = 45;
tup[2] = false;
let student;
student = ['John Lee', 563121];
