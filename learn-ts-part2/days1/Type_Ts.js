(function () {
    var name = "Luan";
    var age = 10;
    var admin = true;
    var a = null;
    var b = undefined;
    var value;
    var c;
    function log() {
        console.log(name, age, admin, a, b, value, c);
    }
    log();
})();
(function () {
    var result;
    var namesArray = ["Luan", "Lam", "Loi"];
    function findName(searchName) {
        var index = namesArray.indexOf(searchName);
        if (index !== -1) {
            return index + 101;
        }
        return undefined;
    }
    result = findName("Hai");
    console.log(result);
})();
