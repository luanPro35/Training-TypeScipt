var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
    Role["Guest"] = "GUEST";
})(Role || (Role = {}));
const permissions = {
    [Role.Admin]: ["create", "update", "delete"],
    [Role.User]: ["read", "comment"],
    [Role.Guest]: ["read"],
};
function checkPermission(role, action) {
    return permissions[role].includes(action);
}
console.log(checkPermission(Role.User, "read"));
console.log(permissions[Role.Admin]);
var Category;
(function (Category) {
    Category["Electronics"] = "ELECTRONICS";
    Category["Fashion"] = "FASHION";
    Category["Food"] = "FOOD";
})(Category || (Category = {}));
function getDiscount(category) {
    const discounts = {
        [Category.Electronics]: 10,
        [Category.Fashion]: 20,
        [Category.Food]: 30,
    };
    return discounts[category];
}
console.log(getDiscount(Category.Electronics));
export {};
//# sourceMappingURL=Utility_Type.js.map