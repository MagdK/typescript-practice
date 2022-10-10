"use strict";
var anchor = document.querySelector('a'); // this value might be null because typscript does not know if there is an anchor tag during development. It doesn't have access to index.html
/*
What we can do if we want to use a piece of code, but typescript does not know if it exists but we are certain, we can use an exclamation mark to push that through
*/
// if(anchor) {
//   console.log(anchor.href);
// }
console.log(anchor.href);
// const form = document.querySelector('form')!; // const form HTMLFormElement
// const form = document.querySelector('.new-item-form')!; // const form: Element - we are passing in a class, and a class can be any sort of html element, it doesn't know whether or not it is a form. 
// To combat this we can use type casting!!!!
var form = document.querySelector('.new-item-form'); // const form: HTMLFormElement
console.log(form.children);
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault(); // this will prevent the page refreshing when we submit the form
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
