const combine = (a: string | number, b: string | number) => {
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
  return Number(a) + Number(b);
};

console.log(combine(5, 10));
console.log(combine(4, "Luan"));
console.log(combine("Hello", "World"));
console.log(combine("Result: ", 10));
