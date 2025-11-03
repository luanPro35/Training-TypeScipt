interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

// ➕ Add product
function addProduct(products: Product[], newProduct: Product): Product[] {
  if (products.some((p) => p.id === newProduct.id)) {
    console.log(`❌ Product with ID ${newProduct.id} already exists`);
    return products;
  }
  return [...products, newProduct];
}

// ❌ Delete product by id
function deleteProductById(products: Product[], id: number): Product[] {
  return products.filter((p: Product) => p.id !== id);
}

// ✏️ Update product by id (không cho sửa id)
function updateProductById(
  products: Product[],
  id: number,
  updates: Partial<Omit<Product, "id">>
): Product[] {
  return products.map((p: Product) => (p.id === id ? { ...p, ...updates } : p));
}

// 🔎 Get product by id
function getProductById(products: Product[], id: number): Product | undefined {
  return products.find((p: Product) => p.id === id);
}

// ================== Example usage ==================
let productList: Product[] = [
  { id: 1, name: "Laptop", price: 1000, category: "Electronics" },
  { id: 2, name: "Mouse", price: 25, category: "Electronics" },
  { id: 3, name: "Keyboard", price: 75, category: "Electronics" },
];

console.log("📦 Original:", productList);

// 1. Add product
productList = addProduct(productList, {
  id: 4,
  name: "Monitor",
  price: 300,
  category: "Electronics",
});
console.log("➕ After add:", productList);

// 2. Delete product id = 2
productList = deleteProductById(productList, 2);
console.log("❌ After delete:", productList);

// 3. Update product id = 1
productList = updateProductById(productList, 1, {
  name: "Gaming Laptop",
  price: 1200,
});
console.log("✏️ After update:", productList);

// 4. Get product id = 3
console.log("🔎 Found product:", getProductById(productList, 3));
