function getProperty(obj, key) {
    return obj[key];
}
var user1 = { id: "1", name: "Luân", age: 25 };
console.log(getProperty(user1, "id"));
console.log(getProperty(user1, "name"));
