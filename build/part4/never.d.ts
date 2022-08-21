declare function generateError(message: string): never;
declare function dumpError(): never;
declare function rec(): never;
declare type paymentAction = 'refund' | 'checkout';
declare function processAction(action: paymentAction): void;
declare function isString(x: string | number): boolean;
//# sourceMappingURL=never.d.ts.map