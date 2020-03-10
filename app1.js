const faker = require('faker');

let firstName = faker.name.firstName();
let lastName = faker.name.lastName();
let jobTitle = faker.name.jobTitle();
let prefix = faker.name.prefix();
let suffix = faker.name.suffix();
let jobArea = faker.name.jobArea();

let phone = faker.phone.phoneNumber();
let email = faker.internet.email();
let address = faker.address.streetAddress() + ' ' + faker.address.city() + ' ' + faker.address.state();

console.log(`Employee: ${prefix} ${firstName} ${lastName} ${suffix}`);
console.log(`Job title: ${jobTitle}`);
console.log(`Job area: ${jobArea}`);
console.log(`Phone: ${phone}`);
console.log(`Email: ${email}`);
console.log(`Address: ${address}`);
