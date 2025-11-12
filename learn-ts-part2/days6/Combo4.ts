import { User } from "../days3/types";

type result = Partial<User>;
const u1: result = {};
const u2: result = { id: "2", name: "Luan" };
const u3: result = { id: "4", name: "Lam", age: 18 };

console.log(u1);
console.log(u2);
console.log(u3);

type result1 = Required<User>;
const u4: result1 = { id: "3", name: "Luan", age: 25 };
console.log(u4);
