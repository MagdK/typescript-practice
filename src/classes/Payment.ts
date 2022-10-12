import { HasFormatter } from '../interfaces/HasFormatter.js'

// CLASSES
export class Payment implements HasFormatter {
    constructor(
        readonly recipient: string, // if we don't have access modiviers in front, this solution won't work!!!!
        private details: string,
        public amount: number
    ) {};

    format() {
        return `${this.recipient} is owed ${this.amount}Pounds for ${this.details}`;
    };
};