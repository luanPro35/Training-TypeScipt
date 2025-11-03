function printUserName(user) {
    let safeName = user.name ?? "Guest";
    console.log(safeName);
}
printUserName({ id: 1, name: "Luan", age: 30 });
function add(a, b) {
    return a + b;
}
console.log(add(5, 10));
// In ra để em dễ thấy (dùng as const trick)
const a = "This is string";
const b = "This is number";
const c = "Other type";
console.log(a);
console.log(b);
console.log(c);
export {};
//# sourceMappingURL=NonNullable.js.map