type Role = "admin" | "user" | "member";
type RolePermissions = Record<Role, string[]>;

const select: RolePermissions = {
  admin: ["create", "read", "update", "delete"],
  user: ["read", "update"],
  member: ["read"],
};

function canAcces(role: Role, action: string) {
  return select[role].includes(action);
}

console.log(canAcces("admin", "create"));
console.log(canAcces("member", "update"));
