enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

type RolePermission = Record<Role, string[]>;

const permissions: RolePermission = {
  [Role.Admin]: ["create", "update", "delete"],
  [Role.User]: ["read", "comment"],
  [Role.Guest]: ["read"],
};

function checkPermission(role: Role, action: string): boolean {
  return permissions[role].includes(action);
}

console.log(checkPermission(Role.User, "read"));
console.log(permissions[Role.Admin]);

enum Category {
  Electronics = "ELECTRONICS",
  Fashion = "FASHION",
  Food = "FOOD",
}

type CategoryDiscount = Record<Category, number>;

function getDiscount(category: Category): number {
  const discounts: CategoryDiscount = {
    [Category.Electronics]: 10,
    [Category.Fashion]: 20,
    [Category.Food]: 30,
  };
  return discounts[category];
}

console.log(getDiscount(Category.Electronics));

function updateProperty<T extends object>(obj: T, updates: Partial<T>): void {
  Object.assign(obj, updates);
}

// Ví dụ sử dụng:
interface User {
  name: string;
  age: number;
  email?: string;
}

const user1: User = { name: "Alice", age: 30 };
console.log("Trước khi cập nhật:", user1); // { name: "Alice", age: 30 }

updateProperty(user1, { age: 31, email: "alice@example.com" });
console.log("Sau khi cập nhật:", user1); // { name: "Alice", age: 31, email: "alice@example.com" }

const user2: User = { name: "Bob", age: 25, email: "bob@example.com" };
console.log("Trước khi cập nhật:", user2); // { name: "Bob", age: 25, email: "bob@example.com" }

updateProperty(user2, { name: "Robert" });
console.log("Sau khi cập nhật:", user2); // { name: "Robert", age: 25, email: "bob@example.com" }
