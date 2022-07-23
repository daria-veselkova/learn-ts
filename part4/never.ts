function generateError(message: string): never {
    throw new Error(message);
}

function dumpError(): never {
    while (true) { }
}

function rec(): never {
    return rec();
}

type paymentAction = 'refund' | 'checkout';

function processAction(action: paymentAction) {
    switch (action) {
        case 'refund':
            //...
            break;
        case 'checkout':
            //...
            break;
        default:
            const _: never = action;
            throw new Error('No such action');
    } 
}

function isString(x: string | number): boolean {
    if (typeof x === 'string') {
        return true;
    } else if (typeof x === 'number') {
        return false;
    }
    generateError('message');
}