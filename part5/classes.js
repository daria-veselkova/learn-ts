"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
const userNew = new User('Jack');
console.log(userNew);
userNew.name = 'John';
console.log(userNew);
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Holded"] = 0] = "Holded";
    PaymentStatus[PaymentStatus["Processed"] = 1] = "Processed";
    PaymentStatus[PaymentStatus["Reversed"] = 2] = "Reversed";
})(PaymentStatus || (PaymentStatus = {}));
class Payment {
    constructor(id) {
        this.status = PaymentStatus.Holded;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.id = id;
        this.createdAt;
        this.status;
        this.updatedAt;
    }
    getPaymentLifatime() {
        return new Date().getTime() - this.createdAt.getTime();
    }
    unholdPayment() {
        if (this.status == PaymentStatus.Processed) {
            throw new Error('The payment cannot be unhold!');
        }
        this.status = PaymentStatus.Reversed;
        this.updatedAt = new Date();
    }
}
const payment = new Payment(1);
payment.unholdPayment();
console.log(payment);
const time = payment.getPaymentLifatime();
console.log(time);
