interface Student {
  name: string;
  age: number;
  isGraduated: boolean;
}

let student1: Student = {
  name: "Nguyễn Văn A",
  age: 20,
  isGraduated: false,
};

console.log(student1);

interface Getting {
  sayHello(name: string): string;
}

const getter: Getting = {
  sayHello(name: string): string {
    return `Hello, ${name}`;
  },
};

console.log(getter.sayHello("Nguyễn Văn A"));

interface Students {
  name: string;
  age: number;
}

interface Person extends Students {
  address: string;
}

let s1: Person = {
  name: "Le Quang Luan",
  age: 19,
  address: "Quang Nam",
};

console.log(s1);

enum Category {
  Electronics = "ELECTRONICS",
  Fashion = "FASHION",
  Food = "FOOD",
  Book = "BOOK",
}

enum Status {
  InStock = "IN_STOCK",
  OutOfStock = "OUT_OF_STOCK",
}

enum Priority {
  Low = "LOW",
  Medium = "MEDIUM",
  High = "HIGH",
}

interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  status: Status;
  priority: Priority;
}

let products: Product[] = [
  {
    id: "1",
    name: "Laptop",
    price: 1500,
    category: Category.Electronics,
    status: Status.InStock,
    priority: Priority.High,
  },
  {
    id: "2",
    name: "T-Shirt",
    price: 25,
    category: Category.Fashion,
    status: Status.OutOfStock,
    priority: Priority.Medium,
  },
  {
    id: "3",
    name: "Pizza",
    price: 10,
    category: Category.Food,
    status: Status.InStock,
    priority: Priority.Low,
  },
];

function printProducts(items: Product[]): void {
  items.forEach((p) => {
    console.log(
      `ID: ${p.id}, Name: ${p.name}, Price: ${p.price}, Category: ${p.category}, Status: ${p.status}, Priority: ${p.priority}`
    );
  });
}

function addProduct(product: Product) {
  products.push(product);
  console.log(`✅ Đã thêm sản phẩm: ${product.name}`);
}

function updateProduct(id: string, newData: Partial<Product>) {
  const product = products.find((p) => p.id === id);
  if (product) {
    Object.assign(product, newData);
    console.log(`✏️ Đã cập nhật sản phẩm ID ${id}`);
  } else {
    console.log("❌ Không tìm thấy sản phẩm!");
  }
}

function deleteProduct(id: string) {
  products = products.filter((p) => p.id !== id);
  console.log(`🗑️ Đã xoá sản phẩm ID ${id}`);
}

function filterByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}

function filterByStatus(status: Status): Product[] {
  return products.filter((p) => p.status === status);
}

function filterByPriority(priority: Priority): Product[] {
  return products.filter((p) => p.priority === priority);
}

printProducts(products);
addProduct({
  id: "4",
  name: "Book A",
  price: 15,
  category: Category.Book,
  status: Status.InStock,
  priority: Priority.Medium,
});
updateProduct("2", {
  price: 30,
  category: Category.Fashion,
  status: Status.InStock,
});
deleteProduct("1");

console.log("📚 Sản phẩm thuộc Category.Fashion:");
printProducts(filterByCategory(Category.Fashion));

console.log("📦 Sản phẩm đang còn hàng:");
printProducts(filterByStatus(Status.InStock));

console.log("🔥 Sản phẩm ưu tiên cao:");
printProducts(filterByPriority(Priority.High));
