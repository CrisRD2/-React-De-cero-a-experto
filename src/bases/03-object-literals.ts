interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
}
interface Address {
    zipcode: string;
    city: string;
}
const ironMan: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        zipcode: 'ABC123',
        city: 'NY'
    }

}
const spiderman: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        zipcode: 'ABC123',
        city: 'NY'
    }

}
/* const sp = {... ironMan};
const spiderman = structuredClone(ironMan);

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 22;
spiderman.address.city = 'San José'; */

console.log(ironMan, spiderman);