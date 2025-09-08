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
