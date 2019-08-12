'use strict';

function createGreeting(name, age) {
    const validAge = checkAgeValidity(age);
    const yearOfBirth = 2019 - age;
    return `Hi, my name is ${name} and I'm ${validAge} years old. I was born in ${yearOfBirth}`;
}

function getYearOfBirth(age) {
    return 2019 - age;
}

function checkAgeValidity(age) {
    if (age < 0) {
        throw new Error("Age can not be negative");
    }
    return age;
}

try {
        const greeting1 = createGreeting('Chris', -1);
        console.log(greeting1);
    } catch(e) {
        console.log(`${e.name}: ${e.message}`);
    }