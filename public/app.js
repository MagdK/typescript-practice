// INTERFACES
const me = {
    name: 'Effi',
    age: 8,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
let someone;
const greetPerson = (person) => {
    console.log('Hello,', person.name);
};
greetPerson(me);
import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
console.log(invOne, invTwo);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    // inv.client = 'something else'; // I get an error, because it is read only
    console.log(inv.client, inv.amount, inv.format());
});
// To combat this we can use type casting!!!!
const form = document.querySelector('.new-item-form'); // const form: HTMLFormElement
// console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // this will prevent the page refreshing when we submit the form
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
