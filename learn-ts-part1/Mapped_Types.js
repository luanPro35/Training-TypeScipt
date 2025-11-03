var Category;
(function (Category) {
    Category["Electronics"] = "ELECTRONICS";
    Category["Fashion"] = "FASHION";
    Category["Food"] = "FOOD";
    Category["Book"] = "BOOK";
})(Category || (Category = {}));
var products = [
    { id: 1, name: "Laptop", price: 1500, category: Category.Electronics },
    { id: 2, name: "T-Shirt", price: 20, category: Category.Fashion },
    { id: 3, name: "Pizza", price: 10, category: Category.Food },
    { id: 4, name: "Book", price: 10, category: Category.Book },
];
function addProduct(product) {
    products.push(product);
    console.log("\u2705 \u0110\u00E3 th\u00EAm s\u1EA3n ph\u1EA9m: ".concat(product.name));
}
function updateProduct(id, update) {
    var product = products.find(function (p) { return p.id === id; });
    if (!product) {
        console.log("Không tìm thấy sản phẩm");
        return;
    }
    Object.assign(product, update);
    console.log("S\u1EA3n ph\u1EA9m ID ".concat(id, " \u0111\u00E3 \u0111\u01B0\u1EE3c c\u1EADp nh\u1EADt"));
}
function deleteProduct(id) {
    var deleteId = products.findIndex(function (p) { return p.id === id; });
    if (deleteId !== -1) {
        products.splice(deleteId, 1);
        console.log("Product with ID ".concat(id, " deleted."));
    }
    else {
        console.log("Product with ID ".concat(id, " not found."));
    }
}
function filterByCategory(category) {
    return products.filter(function (item) { return item.category === category; });
}
function getMostExpensiveProduct(products) {
    return products.length
        ? products.reduce(function (prev, curr) { return (prev.price > curr.price ? prev : curr); })
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
var InMemoryRepository = /** @class */ (function () {
    function InMemoryRepository() {
        this.items = [];
    }
    InMemoryRepository.prototype.add = function (item) {
        this.items.push(item);
        console.log("\u2705 \u0110\u00E3 th\u00EAm item:", item);
    };
    InMemoryRepository.prototype.read = function (id) {
        return this.items.find(function (i) { return i.id === id; });
    };
    InMemoryRepository.prototype.update = function (id, update) {
        var item = this.items.find(function (i) { return i.id === id; });
        if (!item)
            return undefined;
        Object.assign(item, update);
        return item;
    };
    InMemoryRepository.prototype.delete = function (id) {
        var index = this.items.findIndex(function (i) { return i.id === id; });
        if (index === -1)
            return false;
        this.items.splice(index, 1);
        return true;
    };
    InMemoryRepository.prototype.getAll = function () {
        return this.items;
    };
    return InMemoryRepository;
}());
var productRepo = new InMemoryRepository();
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
