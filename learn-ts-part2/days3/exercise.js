function combine(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    else if (typeof a === "number" && typeof b === "string") {
        return a + String(b);
    }
    else if (typeof a === "string" && typeof b === "number") {
        return String(a) + b;
    }
    else {
        throw new Error("Cannot combine types");
    }
}
console.log(combine(10, 5));
console.log(combine("Hello", "World"));
console.log(combine(10, " tuổi"));
function greetUser(name, callback) {
    var mess = "Xin ch\u00E0o, ".concat(name);
    callback(mess);
}
greetUser("Luan", function (msg) { return console.log(msg); });
function calculateWithCallback(x, y, op, callback) {
    var result;
    switch (op) {
        case "add":
            result = x + y;
            break;
        case "sub":
            result = x - y;
            break;
        case "mul":
            result = x * y;
            break;
        case "div":
            result = x / y;
            break;
        default:
            throw new Error("Invalid op");
    }
    callback(result);
}
function formatInput(x) {
    if (typeof x === "string") {
        return x.toUpperCase();
    }
    else if (typeof x === "number") {
        return x * 10;
    }
    else {
        throw new Error("error");
    }
}
console.log(formatInput("luan"));
console.log(formatInput(5));
