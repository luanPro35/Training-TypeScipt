function mergeObjects(objA, objB) {
    return Object.assign({}, objA, objB);
}
var user = { id: 1, name: "Alice" };
var job = { role: "Developer", level: "Junior" };
var merged = mergeObjects(user, job);
console.log(merged);
