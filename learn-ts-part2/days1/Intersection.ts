type User = { name: string };
type Admin = { isAdmin: true };
type Admin_User = User & Admin;

const luan: Admin_User = {
  name: "Luan",
  isAdmin: true,
};

console.log(luan);
