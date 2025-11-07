function sum<T>(value: T): T {
  return value;
}

function merge<T, U>(a: T, b: U): T & U {
  return { ...a, ...b };
}

console.log(sum<number>(5));
console.log(
  merge<{ name: string }, { age: number }>({ name: "Luan" }, { age: 25 })
);
