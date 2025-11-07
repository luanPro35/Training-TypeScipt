function printUser(user) {
    return "User: ".concat(user.name, " - Age: ").concat(user.age);
}
function processUsers(userOrUsers) {
    if (Array.isArray(userOrUsers)) {
        return userOrUsers.map(function (u) { return "".concat(u.name, " (").concat(u.age, ")"); });
    }
    else {
        return "".concat(userOrUsers.name, " (").concat(userOrUsers.age, ")");
    }
}
function filterByAge(items, callback) {
    return items.filter(callback);
}
var users = [
    { id: "u1", name: "Luân", age: 25 },
    { id: "u2", name: "Đức", age: 17 },
];
var admin = {
    id: "a1",
    name: "An",
    age: 30,
    role: "admin",
    permissions: ["read", "write"],
};
console.log(printUser(users[0]));
console.log(processUsers(users[0]));
console.log(processUsers(users));
var adults = filterByAge(users, function (u) { return u.age >= 18; });
console.log(adults);
