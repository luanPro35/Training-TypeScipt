function fun(arg1, arg2) {
    if (Array.isArray(arg1) && arg2 === undefined) {
        return arg1;
    }
    return arg2[arg1];
}
var arr = ["luan", "lam", "loi", "hai", "hy"];
console.log(fun(arr));
console.log(fun(2, arr));
var user = { name: "Luân", age: 25 };
console.log(fun("name", user));
