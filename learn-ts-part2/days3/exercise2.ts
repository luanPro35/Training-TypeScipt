type User = {
  id: string;
  name: string;
  age: number;
};

type Admin = User & {
  role: "admin";
  permissions: string[];
};

function printUser(user: User): string {
  return `User: ${user.name} - Age: ${user.age}`;
}

function processUsers(user: User): string;
function processUsers(users: User[]): string[];
function processUsers(userOrUsers: User | User[]): string | string[] {
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
