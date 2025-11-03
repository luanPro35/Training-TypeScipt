interface User {
  id: number;
  name: string | null;
  age: number;
}

function printUserName(user: User) {
  let safeName: NonNullable<User["name"]> = user.name ?? "Guest";
  console.log(safeName);
}

printUserName({ id: 1, name: "Luan", age: 30 });

type MaybeNumber = number | null | undefined;

type StrictNumber = NonNullable<MaybeNumber>;

function add(a: StrictNumber, b: StrictNumber) {
  return a + b;
}

console.log(add(5, 10));

// Định nghĩa type CheckType
type CheckType<T> = T extends string
  ? "This is string"
  : T extends number
  ? "This is number"
  : "Other type";

// Test thử
type A = CheckType<string>; // "This is string"
type B = CheckType<number>; // "This is number"
type C = CheckType<boolean>; // "Other type"

// In ra để em dễ thấy (dùng as const trick)
const a: A = "This is string";
const b: B = "This is number";
const c: C = "Other type";

console.log(a);
console.log(b);
console.log(c);

type ExtractString<T> = T extends string ? T : never;

type D = ExtractString<string | number | boolean>;
type E = ExtractString<number | boolean>;
type F = ExtractString<boolean>;

type FirstName<T> = T extends (...args: infer P) => any ? P : never;
