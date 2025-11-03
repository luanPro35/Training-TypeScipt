enum Category {
  Electronics = "ELECTRONICS",
  Fashion = "FASHION",
  Food = "FOOD",
  Book = "BOOK",
}

interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
}

let products: Product[] = [
  { id: 1, name: "Laptop", price: 1500, category: Category.Electronics },
  { id: 2, name: "T-Shirt", price: 20, category: Category.Fashion },
  { id: 3, name: "Pizza", price: 10, category: Category.Food },
  { id: 4, name: "Book", price: 10, category: Category.Book },
];

function addProduct(product: Product) {
  products.push(product);
  console.log(`✅ Đã thêm sản phẩm: ${product.name}`);
}

type NullablePartial<T> = {
  [K in keyof T]?: T[K] | null;
};

function updateProduct(id: number, update: NullablePartial<Product>) {
  const product = products.find((p) => p.id === id);
  if (!product) {
    console.log("Không tìm thấy sản phẩm");
    return;
  }
  Object.assign(product, update);
  console.log(`Sản phẩm ID ${id} đã được cập nhật`);
}

function deleteProduct(id: number) {
  const deleteId = products.findIndex((p) => p.id === id);
  if (deleteId !== -1) {
    products.splice(deleteId, 1);
    console.log(`Product with ID ${id} deleted.`);
  } else {
    console.log(`Product with ID ${id} not found.`);
  }
}

function filterByCategory(category: Category): Product[] {
  return products.filter((item: Product) => item.category === category);
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  return products.length
    ? products.reduce((prev, curr) => (prev.price > curr.price ? prev : curr))
    : null;
}
addProduct({
  id: 5,
  name: "Phone",
  price: 900,
  category: Category.Electronics,
});
updateProduct(2, { price: 25, name: null });
deleteProduct(3);

console.log("📚 Sản phẩm trong category Book:");
console.log(filterByCategory(Category.Book));

console.log("💰 Sản phẩm đắt nhất:");
console.log(getMostExpensiveProduct(products));

interface CrudRepository<T extends { id: any }> {
  add(item: T): void;
  read(id: T["id"]): T | undefined;
  update(id: T["id"], item: NullablePartial<T>): T | undefined;
  delete(id: T["id"]): boolean;
  getAll(): T[];
}

class InMemoryRepository<T extends { id: any }> implements CrudRepository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
    console.log(`✅ Đã thêm item:`, item);
  }

  read(id: T["id"]): T | undefined {
    return this.items.find((i) => i.id === id);
  }

  update(id: T["id"], update: NullablePartial<T>): T | undefined {
    const item = this.items.find((i) => i.id === id);
    if (!item) return undefined;
    Object.assign(item, update);
    return item;
  }

  delete(id: T["id"]): boolean {
    const index = this.items.findIndex((i) => i.id === id);
    if (index === -1) return false;
    this.items.splice(index, 1);
    return true;
  }

  getAll(): T[] {
    return this.items;
  }
}

const productRepo = new InMemoryRepository<Product>();

productRepo.add({
  id: 1,
  name: "Laptop",
  price: 1000,
  category: Category.Electronics,
});
productRepo.add({
  id: 2,
  name: "Phone",
  price: 500,
  category: Category.Electronics,
});

console.log("📦 All:", productRepo.getAll());

console.log("🔍 Find ID=2:", productRepo.read(2));

productRepo.update(2, { price: 600, name: null });
console.log("✏️ Sau update:", productRepo.read(2));

productRepo.delete(1);
console.log("❌ Sau delete:", productRepo.getAll());
