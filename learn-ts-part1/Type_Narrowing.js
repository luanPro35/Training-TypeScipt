function printId(id) {
    if (typeof id === "string") {
        console.log("ID in uppercase:", id.toUpperCase());
    }
    else {
        console.log("ID is a number:", id);
    }
}
printId("chao");
printId(123456789);
