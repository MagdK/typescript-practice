// CLASSES
export class Payment {
    constructor(recipient, // if we don't have access modiviers in front, this solution won't work!!!!
    details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    ;
    format() {
        return `${this.recipient} is owed ${this.amount}Pounds for ${this.details}`;
    }
    ;
}
;
