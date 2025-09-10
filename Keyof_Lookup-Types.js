var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// function updateProperty<T extends object>(obj: T, updates: Partial<T>): void {
//   Object.assign(obj, updates);
// }
// let u: Product = {
//   id: 1,
//   name: "Laptop",
//   price: 1000,
//   category: "Electronics",
// };
// updateProperty(u, { id: 2 });
// updateProperty(u, { name: "Nitro 5", price: 2000 });
// console.log(u);
function addProduct(products, newProduct) {
    return __spreadArray(__spreadArray([], products, true), [newProduct], false);
}
function deleteProductById(products, id) {
    return products.filter(function (p) { return p.id !== id; });
}
function updateProductById(products, id, updates) {
    return products.map(function (p) { return (p.id === id ? __assign(__assign({}, p), updates) : p); });
}
// Example usage:
var productList = [
    { id: 1, name: "Laptop", price: 1000, category: "Electronics" },
    { id: 2, name: "Mouse", price: 25, category: "Electronics" },
    { id: 3, name: "Keyboard", price: 75, category: "Electronics" },
];
function getProductById(products, id) {
    return products.find(function (p) { return p.id === id; });
}
addProduct(productList, {
    id: 4,
    name: "Monitor",
    price: 300,
    category: "Electronics",
});
// 2. Delete sản phẩm id = 2
deleteProductById(productList, 2);
// 3. Update sản phẩm id = 1 (đổi name + price)
updateProductById(productList, 1, { name: "Gaming Laptop", price: 1200 });
// 4. Get sản phẩm id = 3
console.log(getProductById(productList, 3));
