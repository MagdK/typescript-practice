import { HasFormatter } from '../interfaces/HasFormatter.js'

// CLASSES
export class Invoice implements HasFormatter {
    /* Long version to create the class - below you can see the shorthand for it
    readonly client: string; // we can read it outside and inside the class, but we can not change it
    private details: string; // access modifier 'private' was used --> we get an error down, because of it
    public amount: number; // public word is an access modifier

    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    } */

    constructor(
        readonly client: string, // if we don't have access modiviers in front, this solution won't work!!!!
        private details: string,
        public amount: number
    ) {};

    format() {
        // this.client = 'something else'; // throws an error, because it is read only
        return `${this.client} owes ${this.amount}Pound for ${this.details}`;
    };
};