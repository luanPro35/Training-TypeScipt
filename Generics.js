function getLast(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    return arr[arr.length - 1];
}
console.log(getLast([1, 2, 3]));
var Status;
(function (Status) {
    Status[Status["Active"] = 0] = "Active";
    Status[Status["Inactive"] = 1] = "Inactive";
})(Status || (Status = {}));
var item = {
    status: Status.Active,
    message: "Success",
    data: [{ id: 1, name: "Example Product" }],
};
console.log(item);
