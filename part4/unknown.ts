let input: unknown;
let arg: any;

input = 3;
input = ['str', 'str'];
input = arg;

function run(i: unknown): void {
    if (typeof i === 'number') {
        i++;
    } else {
        return
    }
}

run(input);
run(3);

async function getData() {
    try {
        await fetch('');
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

async function getDataForce() {
    try {
        await fetch('');
    } catch (error) {
        const e = error as Error;
        console.log(e.message);
    }
}

type u1 = unknown | number;
type u2 = unknown & string;
