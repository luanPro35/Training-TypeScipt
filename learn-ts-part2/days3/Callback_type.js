(function () {
    function getUser(name, callback) {
        var mess = "Hello, ".concat(name);
        callback(mess);
    }
    getUser("Luan", function (msg) { return console.log(msg); });
});
