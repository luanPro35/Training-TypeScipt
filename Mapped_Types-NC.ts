interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

type ReadonlyProduct<T> = { readonly [K in keyof T]: T[K] };
type NullableProduct<T> = { [K in keyof T]: T[K] | null };

type ApiProduct<T> = {
  [K in keyof T as `api_${string & K}`]: T[K];
};

const myProduct: Product = {
  id: 1,
  name: "Laptop",
  price: 1200,
  category: "Electronics",
};

const readonlyMyProduct: ReadonlyProduct<Product> = myProduct;

const nullableMyProduct: NullableProduct<Product> = {
  id: null,
  name: null,
  price: null,
  category: null,
};

const apiMyProduct: ApiProduct<Product> = {
  api_id: 3,
  api_name: "Keyboard",
  api_price: 75,
  api_category: "Electronics",
};

console.log(myProduct);
console.log(apiMyProduct);
console.log(readonlyMyProduct);
console.log(nullableMyProduct);
