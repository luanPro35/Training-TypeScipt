var myProduct = {
    id: 1,
    name: "Laptop",
    price: 1200,
    category: "Electronics",
};
var readonlyMyProduct = myProduct;
var nullableMyProduct = {
    id: 2,
    name: "Mouse",
    price: null, // Example of a nullable property
    category: "Electronics",
};
var apiMyProduct = {
    api_id: 3,
    api_name: "Keyboard",
    api_price: 75,
    api_category: "Electronics",
};
console.log(myProduct);
console.log(apiMyProduct);
console.log(readonlyMyProduct);
console.log(nullableMyProduct);
