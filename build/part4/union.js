"use strict";
function logId(id) {
    if (typeof id === 'string') {
        console.log(id.toLowerCase());
    }
    else {
        console.log(id.toFixed(2));
    }
}
logId('one');
logId(1);
function LogError(err) {
    if (typeof err === 'string') {
        console.log(err.toUpperCase());
    }
    else if (Array.isArray(err)) {
        console.log(err);
    }
    else {
        return;
    }
}
function logObject(obj) {
    if ('a' in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
}
function logMultipleIds(a, b) {
    if (a === b) {
        console.log(a);
    }
}
const a = 1;
