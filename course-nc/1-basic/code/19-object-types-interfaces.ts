
/*

OBJECT TYPES -  INTERFACES

- In JavaScript, the fundamental way that we group and pass around data is through objects. In TypeScript, we represent those through object types.

*/

// 1. As we’ve seen, they can be anonymous:
function funNormal(person: { name: string; age: number }) {
  return "Hello " + person.name;
}

// 2. or they can be named by using either an interface
interface PersonInterface {
  name: string;
  age: number;
}

function funInterface(person: PersonInterface) {
  return "Hello " + person.name;
}

// 3. or a type alias.
type PersonType = {
  name: string;
  age: number;
};

function funType(person: PersonType) {
  return "Hello " + person.name;
}