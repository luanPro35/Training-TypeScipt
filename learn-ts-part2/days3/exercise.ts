function combine(a: unknown, b: unknown): string | number {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + b;
  } else if (typeof a === "number" && typeof b === "string") {
    return a + String(b);
  } else if (typeof a === "string" && typeof b === "number") {
    return String(a) + b;
  } else {
    throw new Error("Cannot combine types");
  }
}

console.log(combine(10, 5));
console.log(combine("Hello", "World"));
console.log(combine(10, " tuổi"));

function greetUser(name: string, callback: (msg: string) => void) {
  const mess = `Xin chào, ${name}`;
  callback(mess);
}
greetUser("Luan", (msg) => console.log(msg));

function calculateWithCallback2(
  x: number,
  y: number,
  op: "add" | "sub" | "mul" | "div",
  callback: (result: number) => void
) {
  let result: number;
  switch (op) {
    case "add":
      result = x + y;
      break;
    case "sub":
      result = x - y;
      break;
    case "mul":
      result = x * y;
      break;
    case "div":
      result = x / y;
      break;
    default:
      throw new Error("Invalid op");
  }
  callback(result);
}

function formatInput(x: unknown) {
  if (typeof x === "string") {
    return x.toUpperCase();
  } else if (typeof x === "number") {
    return x * 10;
  } else {
    throw new Error("error");
  }
}

console.log(formatInput("luan"));
console.log(formatInput(5));
