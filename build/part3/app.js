"use strict";
const revenue = 1000;
const bonus = 500;
const result = revenue + bonus;
console.log(result);
function getFullName(firstname, lastname) {
    return `${firstname} ${lastname}`;
}
const getAnotherFullName = (firstname, lastname) => {
    return `${firstname} ${lastname}`;
};
console.log(getFullName('Daria', 'Veselkova'));
console.log(getAnotherFullName('Daria', 'Veselkova'));
