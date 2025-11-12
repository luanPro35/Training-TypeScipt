import { User } from "../days3/types";
const User = {
  id: "3",
  name: "Luan",
  age: 25,
};
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

const u: Pick<User, "id" | "name" | "age"> = {
  id: User.id,
  name: User.name,
  age: User.age,
};

console.log(u);

type omit = Omit<User, "age">;

const re: omit = {
  id: User.id,
  name: User.name,
};

console.log(re);
