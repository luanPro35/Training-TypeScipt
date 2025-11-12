type User1 = {
  id: string;
  name: string;
  age: number;
};

type UserKeys = keyof User1;

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user1: User1 = { id: "1", name: "Luân", age: 25 };

console.log(getProperty(user1, "id"));
console.log(getProperty(user1, "name"));
