"use strict";
class Invoice {
    /* Long version to create the class - below you can see the shorthand for it
    readonly client: string; // we can read it outside and inside the class, but we can not change it
    private details: string; // access modifier 'private' was used --> we get an error down, because of it
    public amount: number; // public word is an access modifier

    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    } */
    constructor(client, // if we don't have access modiviers in front, this solution won't work!!!!
    details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    ;
    format() {
        // this.client = 'something else'; // throws an error, because it is read only
        return `${this.client} owes ${this.amount}Pound for ${this.details}`;
    }
    ;
}
;
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
