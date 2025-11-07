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
function sum(value) {
    return value;
}
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
console.log(sum(5));
console.log(merge({ name: "Luan" }, { age: 25 }));
