"use strict";
let input;
let arg;
input = 3;
input = ['str', 'str'];
input = arg;
function run(i) {
    if (typeof i === 'number') {
        i++;
    }
    else {
        return;
    }
}
run(input);
run(3);
async function getData() {
    try {
        await fetch('');
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}
async function getDataForce() {
    try {
        await fetch('');
    }
    catch (error) {
        const e = error;
        console.log(e.message);
    }
}
