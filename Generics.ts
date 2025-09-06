function getLast<T>(arr: T[]): T | undefined {
  if (arr.length === 0) {
    return undefined;
  }
  return arr[arr.length - 1];
}

console.log(getLast<number>([1, 2, 3]));

enum Status {
  Active,
  Inactive,
}

interface Product {
  id: number;
  name: string;
}

interface ApiResponse<T> {
  status: Status;
  message: string;
  data: T;
}

let item: ApiResponse<Product[]> = {
  status: Status.Active,
  message: "Success",
  data: [{ id: 1, name: "Example Product" }],
};

console.log(item);

function findById<T extends { id: number }>(
  arr: T[],
  id: number
): T | undefined {
  return arr.find((item) => item.id === id);
}
console.log(findById(item.data, 1));
