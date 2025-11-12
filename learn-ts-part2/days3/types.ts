export type User = {
  id: string;
  name: string;
  age: number;
};

export type Admin = {
  id: string;
  name: string;
  age: number;
  role: "admin";
  permissions: string[];
};
