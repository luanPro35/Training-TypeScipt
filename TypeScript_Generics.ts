function mergeObjects<A extends object, B extends object>(
  objA: A,
  objB: B
): A & B {
  return Object.assign({}, objA, objB);
}

const user = { id: 1, name: "Alice" };
const job = { role: "Developer", level: "Junior" };

const merged = mergeObjects(user, job);
console.log(merged);
