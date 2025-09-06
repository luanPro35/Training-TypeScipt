let student1 = {
    name: "Nguyễn Văn A",
    age: 20,
    isGraduated: false,
};
console.log(student1);
const getter = {
    sayHello(name) {
        return `Hello, ${name}`;
    },
};
console.log(getter.sayHello("Nguyễn Văn A"));
let s1 = {
    name: "Le Quang Luan",
    age: 19,
    address: "Quang Nam",
};
console.log(s1);
var Category;
(function (Category) {
    Category["Electronics"] = "ELECTRONICS";
    Category["Fashion"] = "FASHION";
    Category["Food"] = "FOOD";
    Category["Book"] = "BOOK";
})(Category || (Category = {}));
var Status;
(function (Status) {
    Status["InStock"] = "IN_STOCK";
    Status["OutOfStock"] = "OUT_OF_STOCK";
})(Status || (Status = {}));
var Priority;
(function (Priority) {
    Priority["Low"] = "LOW";
    Priority["Medium"] = "MEDIUM";
    Priority["High"] = "HIGH";
})(Priority || (Priority = {}));
let products = [
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
function printProducts(items) {
    items.forEach((p) => {
        console.log(`ID: ${p.id}, Name: ${p.name}, Price: ${p.price}, Category: ${p.category}, Status: ${p.status}, Priority: ${p.priority}`);
    });
}
function addProduct(product) {
    products.push(product);
    console.log(`✅ Đã thêm sản phẩm: ${product.name}`);
}
function updateProduct(id, newData) {
    const product = products.find((p) => p.id === id);
    if (product) {
        Object.assign(product, newData);
        console.log(`✏️ Đã cập nhật sản phẩm ID ${id}`);
    }
    else {
        console.log("❌ Không tìm thấy sản phẩm!");
    }
}
function deleteProduct(id) {
    products = products.filter((p) => p.id !== id);
    console.log(`🗑️ Đã xoá sản phẩm ID ${id}`);
}
function filterByCategory(category) {
    return products.filter((p) => p.category === category);
}
function filterByStatus(status) {
    return products.filter((p) => p.status === status);
}
function filterByPriority(priority) {
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
export {};
//# sourceMappingURL=Interface.js.map