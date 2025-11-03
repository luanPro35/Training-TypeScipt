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
function updateServiceField(serviceObj, field, value) {
    var _a;
    return __assign(__assign({}, serviceObj), (_a = {}, _a[field] = value, _a));
}
var s = { id: 1, name: "Cleaning", duration: 60 };
// ✅ Update name
s = updateServiceField(s, "name", "Premium Cleaning");
// ✅ Update duration
s = updateServiceField(s, "duration", 90);
// ❌ Không được phép update id
// s = updateServiceField(s, "id", 99);
console.log(s);
