import { User, Admin } from "./types";

function printUser(user: User): string {
  return `User: ${user.name} - Age: ${user.age}`;
}

function processUsers(user: { name: string; age: number }): string;
function processUsers(users: { name: string; age: number }[]): string[];
function processUsers(
  userOrUsers: { name: string; age: number } | { name: string; age: number }[]
): string | string[] {
  if (Array.isArray(userOrUsers)) {
    return userOrUsers.map((u) => `${u.name} (${u.age})`);
  } else {
    return `${userOrUsers.name} (${userOrUsers.age})`;
  }
}

function filterByAge<T>(items: T[], callback: (item: T) => boolean): T[] {
  return items.filter(callback);
}

const users: User[] = [
  { id: "u1", name: "Luân", age: 25 },
  { id: "u2", name: "Đức", age: 17 },
];

const admin: Admin = {
  id: "a1",
  name: "An",
  age: 30,
  role: "admin",
  permissions: ["read", "write"],
};

console.log(printUser(users[0]));
console.log(processUsers(users[0]));
console.log(processUsers(users));
const adults = filterByAge(users, (u) => u.age >= 18);
console.log(adults);
