function updateProduct(product, newData) {
    return { ...product, ...newData };
}
let p1 = { id: 1, name: "Laptop", category: "Electron" };
console.log(p1);
let updated = updateProduct(p1, { price: 2000 });
console.log(updated);
let preview = { id: 1, name: "Laptop" };
console.log(preview);
let p2 = { id: 1, name: "Laptop", category: "Electron" };
console.log(p2);
function createUser(newUser) {
    const UserId = Math.floor(Math.random() * 1000);
    return { id: UserId, ...newUser };
}
function getUserProfile(user) {
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
export {};
//# sourceMappingURL=TypeScript_Utility.js.map