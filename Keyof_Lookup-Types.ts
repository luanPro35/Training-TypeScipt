interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

function updateProperty<T, K extends keyof T>(
  obj: T,
  key: K,
  value: T[K]
): void {
  obj[key] = value;
}

let u: Product = {
  id: 1,
  name: "Laptop",
  price: 1000,
  category: "Electronics",
};
updateProperty(u, "name", "Gaming Laptop");
updateProperty(u, "price", 1200);
updateProperty(u, "id", 2);
updateProperty(u, "category", "Gadgets");
updateProperty(u, "price", 10000);
console.log(u);
