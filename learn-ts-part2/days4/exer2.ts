function fun<T>(arr: T[]): T[];
function fun<T>(index: number, arr: T[]): T;
function fun<V, K extends keyof V>(key: K, value: V): V[K];
function fun(arg1: any, arg2?: any): any {
  if (Array.isArray(arg1) && arg2 === undefined) {
    return arg1;
  }
  return arg2[arg1];
}

const arr = ["luan", "lam", "loi", "hai", "hy"];
console.log(fun(arr));
console.log(fun(2, arr));

const user = { name: "Luân", age: 25 };
console.log(fun("name", user));
