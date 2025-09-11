/**
 * Merges an array of objects into a single object.
 * If there are overlapping keys, the values from later objects in the array will overwrite
 * values from earlier objects.
 *
 * @param objects An array of objects to merge.
 * @returns A single object containing all properties from the input objects.
 */
function mergeManyObjects<T extends Record<string, any>>(objects: T[]): T {
  return objects.reduce((mergedObject, currentObject) => {
    return { ...mergedObject, ...currentObject };
  }, {} as T);
}

// Example Usage:
const obj1 = { a: 1, b: "hello" };
const obj2 = { c: true, d: 3.14 };
const obj3 = { b: "world", e: [1, 2, 3] };

const merged = mergeManyObjects([obj1, obj2, obj3]);

console.log(merged);
// Expected output: { a: 1, b: 'world', c: true, d: 3.14, e: [1, 2, 3] }

// Another example with type inference
interface User {
  id: number;
  name: string;
}

interface Address {
  street: string;
  city: string;
}

interface Contact {
  email: string;
  phone?: string;
}

const user: User = { id: 1, name: "Alice" };
const address: Address = { street: "123 Main St", city: "Anytown" };
const contact: Contact = { email: "alice@example.com" };

const userProfile = mergeManyObjects([user, address, contact]);

console.log(userProfile);
// Expected output: { id: 1, name: 'Alice', street: '123 Main St', city: 'Anytown', email: 'alice@example.com' }
