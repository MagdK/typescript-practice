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

    let doc: HasFormatter;
    if(type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }
    console.log(doc);

    list.render(doc, type.value, 'end');
    
});