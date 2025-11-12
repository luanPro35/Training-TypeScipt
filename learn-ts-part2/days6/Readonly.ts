import { User } from "../days3/types";

type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

type trap = Readonly<User>;
type trap1 = Mutable<trap>;

const re: trap1 = {
  id: "3",
  name: "Luan",
  age: 25,
};

re.name = "lam";

console.log(re);
