function mt(a, b, op) {
    switch (op) {
        case "cong": {
            return a + b;
        }
        case "tru": {
            return a - b;
        }
        case "nhan": {
            return a * b;
        }
        case "chia": {
            return a / b;
        }
        default: {
            throw new Error("Invalid operation");
        }
    }
}
console.log(mt(5, 10, "cong"));
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
calculateWithCallback(10, 5, "mul", function (res) { return console.log("Result:", res); });
