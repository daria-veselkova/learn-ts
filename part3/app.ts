const revenue: number = 1000;
const bonus: number = 500;

const result: number = revenue + bonus;
console.log(result);

function getFullName (firstname: string, lastname: string): string {
    return `${firstname} ${lastname}`;
}

const getAnotherFullName = (firstname: string, lastname: string): string => {
    return `${firstname} ${lastname}`;
}

console.log(getFullName('Daria', 'Veselkova'));
console.log(getAnotherFullName('Daria', 'Veselkova'));