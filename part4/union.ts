function logId(id: string | number): void {
    if (typeof id === 'string') {
        console.log(id.toLowerCase());
    } else {
        console.log(id.toFixed(2));
    }
}

logId('one');
logId(1);

function LogError(err: string | string[] | null): void {
    if (typeof err === 'string') {
        console.log(err.toUpperCase());
    } else if (Array.isArray(err)) {
        console.log(err);
    } else {
        return
    }
}

function logObject(obj: { a: number } | { b: number }): void {
    if ('a' in obj) {
        console.log(obj.a);
    } else {
        console.log(obj.b);
    }
}

function logMultipleIds(a: string | number, b: string | boolean): void {
    if (a === b) {
        console.log(a);
    }
}

const a: 1 = 1;
