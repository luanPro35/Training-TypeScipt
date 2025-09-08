interface Product {
  id: number;
  name: string;
  price?: number;
  category: string;
}

function updateProduct(product: Product, newData: Partial<Product>): Product {
  return { ...product, ...newData };
}

let p1: Product = { id: 1, name: "Laptop", category: "Electron" };
console.log(p1);
let updated = updateProduct(p1, { price: 2000 });
console.log(updated);

type ProductPreview = Pick<Product, "id" | "name">;
let preview: ProductPreview = { id: 1, name: "Laptop" };
console.log(preview);

type ProductWithouPrice = Omit<Product, "price">;
let p2: ProductWithouPrice = { id: 1, name: "Laptop", category: "Electron" };
console.log(p2);

interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

function createUser(newUser: Omit<User, "id">): User {
  const UserId = Math.floor(Math.random() * 1000);
  return { id: UserId, ...newUser };
}

function getUserProfile(user: User): Pick<User, "id" | "username" | "email"> {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
  };
}

let u = createUser({
  username: "Luan",
  email: "quanna",
  password: "securePassword123",
});
console.log(u);

let profile = getUserProfile(u);
console.log(profile);
