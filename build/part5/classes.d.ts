declare class User {
    name: string;
    constructor(name: string);
}
declare const userNew: User;
declare enum PaymentStatus {
    Holded = 0,
    Processed = 1,
    Reversed = 2
}
declare class Payment {
    id: number;
    status: PaymentStatus;
    createdAt: Date;
    updatedAt: Date;
    constructor(id: number);
    getPaymentLifatime(): number;
    unholdPayment(): void;
}
declare const payment: Payment;
declare const time: number;
//# sourceMappingURL=classes.d.ts.map