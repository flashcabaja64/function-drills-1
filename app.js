'use strict';

function createGreeting(name, age) {
    const validAge = checkAgeValidity(age);
    const validName = checkNameValidity(name);
    const yearOfBirth = 2019 - age;
    return `Hi, my name is ${validName} and I'm ${validAge} years old. I was born in ${yearOfBirth}`;
}

function getYearOfBirth(age) {
    return 2019 - age;
}

function checkAgeValidity(age) {
    if (age < 0) {
        throw new Error('Age can not be negative');
    } else if (age === undefined) {
        throw new Error('Age is undefined');
    } else if (typeof age !== 'number') {
        throw new Error('Age is not a number');
    }
    return age;
}

function checkNameValidity(name) {
    if (typeof name !== 'string') {
        throw new Error('Name is not a string');
    } else if (name === undefined) {
        throw new Error('Name is undefined');
    }
    return name;
}

try {
        const greeting1 = createGreeting(true, 12);
        console.log(greeting1);
    } catch(e) {
        console.log(`${e.name}: ${e.message}`);
    }


//const greeting1 = createGreeting('29');
