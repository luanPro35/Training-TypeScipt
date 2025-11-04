interface UserInterface {
  id: string;
  name: string;
  age: number;
}

interface Person extends UserInterface {
  address: string;
}

const person: Person = {
  id: "123",
  name: "Luan",
  age: 19,
  address: "Hoi An",
};
