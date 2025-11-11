type User = {
  id: string;
  name: string;
  age: number;
};

type UserKeys = keyof User;

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user1: User = { id: "1", name: "Luân", age: 25 };

console.log(getProperty(user1, "id"));
console.log(getProperty(user1, "name"));
