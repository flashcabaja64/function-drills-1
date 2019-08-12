'use strict';

function createGreeting(name, age) {
    const yearOfBirth = 2019 - age;
    return `Hi, my name is Chris and I'm 29 years old. I was born in ${yearOfBirth}`;
}

function getYearOfBirth(age) {
    return 2019 - age;
}

function yearOfBirth(age) {
    if (age < 0) {
        throw new Error("Age can not be negative");
    }
    return age;

    try {
        const greeting1 = createGreeting(age);
    } catch(e) {
        console.log(`${e.name}: ${e.message}`);
    }
}

const greeting1 = createGreeting();
console.log(greeting1);