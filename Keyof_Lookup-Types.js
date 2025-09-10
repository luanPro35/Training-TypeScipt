function updateProperty(obj, key, value) {
    obj[key] = value;
}
var u = {
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
