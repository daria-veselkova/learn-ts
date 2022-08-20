class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const userNew = new User('Jack');
console.log(userNew);
userNew.name = 'John';
console.log(userNew);


enum PaymentStatus {
    Holded,
    Processed,
    Reversed
}

class Payment {
    id: number;
    status: PaymentStatus = PaymentStatus.Holded;
    createdAt: Date = new Date();
    updatedAt: Date = new Date();

    constructor(id: number) {
        this.id = id;
        this.createdAt;
        this.status;
        this.updatedAt;
    }

    getPaymentLifatime(): number {
        return new Date().getTime() - this.createdAt.getTime();
    }

    unholdPayment(): void {
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
